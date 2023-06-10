import "./category.css";
import {categories} from "./../../data/category";

const Category = () => {
  return (
<div className="all-categories">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category">
          <img src={category.image} alt={category.title} className="category-img"/>
          <h2 className="category-title">{category.title}</h2>
        </div>
        )
      })}
</div>
  )
}

export default Category