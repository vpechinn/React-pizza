import React from 'react';

function Categories({indexCategory, setIndexCategory}) {


  const categories = ['Все', 'Мясные', 'Вегатерианские', 'Гриль', 'Острые', 'Закрытые']

  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) =>
          <li onClick={() => setIndexCategory(i)} className={indexCategory === i ? "active" : ''} key={i}>{category}</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
