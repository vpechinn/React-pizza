import React, {useContext} from "react";


import styles from './Search.module.scss';
import {SearchContext} from "../../App";

function Search () {
    const {searchValue, setSearchValue} = useContext(SearchContext)

    return (
       <div className={styles.input}>
           <input
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               className={styles.root}
               type="text"
               placeholder="Поиск пиццы..."
           />
           {searchValue &&
               <img onClick={() => setSearchValue('')} className={styles.icon} src="./img/close.png" alt="close"/>}
       </div>
    )
}

export default Search;