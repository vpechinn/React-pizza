import React, {useState} from 'react';

function Categories() {

  const [indexCategory, setIndexCategory] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегатерианские', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setIndexCategory(index)
  }
  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) =>
          <li onClick={() => onClickCategory(i)} className={indexCategory === i ? "active" : ''} key={i}>{category}</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
