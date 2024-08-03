import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [indexCategory, setIndexCategory] = useState(0)
    const [activeSort, setActiveSort] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    let category =  indexCategory > 0 ?  `category=${indexCategory}` : ''
    let sortBy = `${activeSort.sortProperty.replace('-', ' ')}`
    let order = activeSort.sortProperty.includes('-') ? 'desc' : 'asc'

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://66aa4067613eced4eba82fcb.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json()).then(data => {
            setItems(data)
            setIsLoading(false)
        })
    }, [category, sortBy, order]);

    return (
        <>
            <div className="content__top">
                <Categories indexCategory={indexCategory} setIndexCategory={(i) => setIndexCategory(i)}/>
                <Sort value={activeSort} setActiveSort={(i) => setActiveSort(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...Array(6)].map((_, index) => <Skeleton key={index}/>) : items.map(item => <Index
                    key={item.id} {...item} />)}
            </div>
        </>
    )
}

export default Home;