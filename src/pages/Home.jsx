import {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";

import {SearchContext} from "../App";
import {setActiveSort, setIndexCategory} from "../redux/slices/filterSlice";
import axios from "axios";

function Home() {
    const {indexCategory, activeSort} = useSelector((state) => state.filterSlice);
    const dispatch = useDispatch();
    const {searchValue} = useContext(SearchContext)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let category =  indexCategory > 0 ?  `category=${indexCategory}` : ''
    let sortBy = `${activeSort.sortProperty.replace('-', '')}`
    let order = activeSort.sortProperty.includes('-') ? 'desc' : 'asc'

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://66aa4067613eced4eba82fcb.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${searchValue}`)
           .then(res => {
            setItems(res.data)
            setIsLoading(false)
        })
            .catch(err =>  console.log(err))

    }, [category, sortBy, order, searchValue]);

    const pizzas = items.map((item, i) => <Index key={item.id} {...item} />)
    const skeleton = [...Array(6)].map((_, index) => <Skeleton key={index}/>)
    return (
        <>
            <div className="content__top">
                <Categories indexCategory={indexCategory} setIndexCategory={(i) => dispatch(setIndexCategory(i))} />
                <Sort value={activeSort} setActiveSort={(i) => dispatch(setActiveSort(i))}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                    {isLoading ? skeleton : pizzas}
            </div>
        </>
    )
}

export default Home;