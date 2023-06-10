import React from 'react'

const ProductFilterBox = ({filterItem ,  setfilterItem}) => {

  const onchangeHandler = (e) => {
    setfilterItem(e.target.id)
  }
  return (
    <div className="product-filter">
      <div className="form-group">
        <input onChange={onchangeHandler} type="radio" name="filter" id="all" />
        <label htmlFor="all">بدون فلتر</label>
      </div>

      <div className="form-group">
        <input onChange={onchangeHandler} type="radio" name="filter" id="laptop" />
        <label htmlFor="laptop">لابتوب</label>
      </div>


      <div className="form-group">
        <input onChange={onchangeHandler} type="radio" name="filter" id="mobile" />
        <label htmlFor="mobile">موبايل </label>
      </div>
    </div>
  )
}

export default ProductFilterBox;