import React from 'react'
import ProductFilterBox from './ProductFilterBox';
import ProductSortBox from './ProductSortBox';

const ProductSidebar = ({filterItem ,  setfilterItem , sortItem , setsortItem}) => {
  return (
    <div className="product-sidebar">
      <div className="sidebar-item">
        <h4 className="sidebar-item-title">فلتر حسب السلعه</h4>
        <ProductFilterBox filterItem={filterItem}  setfilterItem={setfilterItem} />
      </div>


      <div className="sidebar-item">
        <h4 className="sidebar-item-title">ترتيب حسب السعر</h4>
        <ProductSortBox sortItem={sortItem} setsortItem={setsortItem}/>
      </div>
      </div>
  )
}

export default ProductSidebar;