import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://66aa4067613eced4eba82fcb.mockapi.io/items').then(res => res.json()).then(data => {
            setItems(data)
            setIsLoading(false)
        })
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
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