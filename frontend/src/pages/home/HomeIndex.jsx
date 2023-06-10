import Brands from '../../component/brands/Brands';
import Category from '../../component/category/Category';
import Banner from '../../component/banner/Banner';
import HeadingTitle from '../../component/heading-title/HeadingTitle';
import Slider from '../../component/slider/Slider';
import SpecialOffers from '../../component/specialoffers/SpecialOffers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/apiCalls/productPiCall';

const HomeIndex = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.product)

  const laptops =  products.filter((item) => item.isLaptop === true);
   const phones = products.filter((item) => item.isLaptop === false);




useEffect(() => {
  dispatch(fetchProducts())
} ,[])


  return (
    <>
<Banner/>
<Category/>
<SpecialOffers/>
<HeadingTitle title={"الجديد من اللابتوبات"}/>
<Slider items={laptops}/>
<HeadingTitle title={"الجديد من الموبايلات"}/>
<Slider items={phones}/>
<HeadingTitle title={"تسوق حسب الماركه"}/>
<Brands/>
    </>
  )
}

export default HomeIndex