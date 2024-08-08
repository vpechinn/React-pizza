import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    indexCategory: 0,
    activeSort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setIndexCategory(state, action) {
            state.indexCategory = action.payload
        },
        setActiveSort(state, action) {
            state.activeSort = action.payload
        }
    }
})

export const {setIndexCategory, setActiveSort} = filterSlice.actions;

export default filterSlice.reducer