import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizza } from '../redux/slices/pizzaSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Index from '../components/PizzaBlock';

import { SearchContext } from '../App';
import { setActiveSort, setIndexCategory } from '../redux/slices/filterSlice';

function Home() {
  const { indexCategory, activeSort } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.pizza);
  const { searchValue } = useContext(SearchContext);

  let category = indexCategory > 0 ? `category=${indexCategory}` : '';
  let sortBy = `${activeSort.sortProperty.replace('-', '')}`;
  let order = activeSort.sortProperty.includes('-') ? 'desc' : 'asc';

  useEffect(() => {
    dispatch(fetchPizza({ sortBy, category, order, searchValue }));
  }, [category, sortBy, searchValue, order]);

  const pizzas = items.map((item) => <Index key={item.id} {...item} />);
  const skeleton = [...Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <div className="content__top">
        <Categories
          indexCategory={indexCategory}
          setIndexCategory={(i) => dispatch(setIndexCategory(i))}
        />
        <Sort value={activeSort} setActiveSort={(i) => dispatch(setActiveSort(i))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2>Произошла обишка получения пицц</h2>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      )}
    </>
  );
}

export default Home;
