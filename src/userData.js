const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const datadir = path.join(__dirname, '..', 'data');
const userFile = (user) => path.join(datadir, `${user}.json`);

const getSessions = () => new Promise((resolve, reject) => {
  fs.readdir(datadir, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})
  .then((data) => data.filter((file) => file.match(/\.json$/)))
  .then((files) => files.map((file) => path.basename(file, '.json')))
  .catch(() => []);

const getUserData = (user) => {
  const file = userFile(user);
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }).then(JSON.parse);
};

const constants = Object.freeze({
  KEY_DATA: 'userData',
});

function minLength(length, field) {
  return (entry) => {
    try {
      return entry[field].length >= length;
    } catch (err) {
      return false;
    }
  };
}

function isNumber() {
  return (entry) => !Number.isNaN(entry);
}

const validate = (data) => {
  const RULES = {
    authors: [
      minLength(4, 'name'),
    ],
    posts: [
      ({ author }) => !!data.authors.find(({ id }) => id === author),
      minLength(4, 'category'),
      minLength(24, 'date'),
      minLength(20, 'title'),
    ],
    featuredIDs: [
      isNumber(),
      (postId) => !!data.posts.find(({ id }) => id === postId),
    ],
    social: [
      minLength(10, 'link'),
      minLength(5, 'name'),
    ],
  };

  return (key, entry) => {
    const result = RULES[key].map((validator) => validator(entry));
    if (result.some((ok) => !ok)) {
      throw result;
    }
    return entry;
  };
};

const save = (user) => (data) => new Promise((resolve, reject) => {
  fs.writeFile(userFile(user), JSON.stringify(data), (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const withUserData = (config) => (req, res, next) => getUserData(req.params.user)
  .catch(() => config)
  .then((data) => {
    const saveForUser = save(req.params.user);
    const validateForUser = validate(data);
    const methods = {
      get: (dPath) => Promise.resolve(dPath ? data[dPath] : data),
      add: (dPath, value) => saveForUser({
        ...data,
        [dPath]: [
          ...data[dPath],
          validateForUser(dPath, {
            id: uuidv4(),
            ...value,
          }),
        ],
      }),
      patch: (dPath, id, value) => saveForUser({
        ...data,
        [dPath]: data[dPath].map((obj) => (obj.id !== id
          ? obj
          : validateForUser(dPath, {
            ...obj,
            ...value,
          }))),
      }),
      replace: (dPath, id, value) => saveForUser({
        ...data,
        [dPath]: data[dPath].map((obj) => (obj.id !== id
          ? obj
          : validateForUser(dPath, { id: uuidv4(), ...value }))),
      }),
      delete: (dPath, id) => saveForUser({
        ...data,
        [dPath]: data[dPath].filter((obj) => obj.id !== id),
      }),
    };

    Object.assign(req, {
      [constants.KEY_DATA]: methods,
    });
  })
  .then(() => next());

module.exports = {
  datadir,
  getSessions,
  constants,
  withUserData,
};
