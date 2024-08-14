import React, {useCallback, useContext, useRef} from "react";
import debounce from "lodash.debounce";

import styles from './Search.module.scss';
import {SearchContext} from "../../App";

function Search () {
    const [inputValue, setInputValue] = React.useState("");
    const {setSearchValue} = useContext(SearchContext)
    const inputRef = useRef();

    const updateSearch = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, [300]),
        []
    )

    const clearInput = () => {
        setSearchValue('')
        setInputValue('')
        inputRef.current.focus()
    }

    const onChangeInput = (event) => {
        setInputValue(event.target.value)
        updateSearch(event.target.value)
    }

    return (
       <div className={styles.input}>
           <input
               ref={inputRef}
               value={inputValue}
               onChange={onChangeInput}
               className={styles.root}
               type="text"
               placeholder="Поиск пиццы..."
           />
           {inputValue &&
               <img onClick={clearInput} className={styles.icon} src="./img/close.png" alt="close"/>}
       </div>
    )
}

export default Search;