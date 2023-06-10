

const ProductSortBox = ({sortItem , setsortItem}) => {

  const onChangeHandler = (e) => {
    setsortItem(e.target.id)
  }
  return (
    <div className="product-sort">
    <div className="form-group">
      <input onChange={onChangeHandler}  type="radio" name="sort" id="nosort" />
      <label htmlFor="nosort">بدون ترتيب</label>
    </div>

    <div className="form-group">
      <input onChange={onChangeHandler} type="radio" name="sort" id="low" />
      <label htmlFor="low">من الأقل للأعلى</label>
    </div>


    <div className="form-group">
      <input onChange={onChangeHandler} type="radio" name="sort" id="high" />
      <label htmlFor="high">من الأعلى للأقل </label>
    </div>
  </div>
  )
}

export default ProductSortBox;