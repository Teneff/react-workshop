import React from 'react'

const Category = ({ match }) => {
  return (
    <div>
      category {match.params.category}
    </div>
  )
}

export default Category
