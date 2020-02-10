const express = require('express');

const router = express.Router();
const { constants } = require('./userData');

router.get('/', (req, res) => {
  req[constants.KEY_DATA].get().then(
    (data) => {
      res.json(data);
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

router.get('/:path', (req, res) => {
  const { path } = req.params;
  req[constants.KEY_DATA].get(path).then(
    (data) => {
      res.json(data);
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

router.post('/:path', (req, res) => {
  const { path } = req.params;
  req[constants.KEY_DATA].add(path, req.body).then(
    ({ id }) => {
      res.json({
        id,
      });
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

router.patch('/:path/:id?', (req, res) => {
  const { path, id } = req.params;
  req[constants.KEY_DATA].patch(path, id, req.body).then(
    () => {
      res.json({
        status: 'ok',
      });
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

router.put('/:path/:id?', (req, res) => {
  const { path } = req.params;
  req[constants.KEY_DATA].replace(path, req.body).then(
    ({ id }) => {
      res.json({
        status: 'ok',
        id,
      });
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

router.delete('/:path/:id', (req, res) => {
  const { path, id } = req.params;
  req[constants.KEY_DATA].delete(path, id).then(
    () => {
      res.json({
        status: 'ok',
      });
    },
    (err) => {
      res.status(500);
      res.json({
        status: 'not ok',
        err,
      });
    },
  );
});

module.exports = router;
