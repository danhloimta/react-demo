import * as types from './type';
import {
    fetchDataCategory,
    saveCategory,
    updateCategory,
    deleteCategory
} from '../../../api/apiCategory';

export const fetchCategories = () => {
    return (dispatch) => (
        fetchDataCategory()
            .then(res => {
                dispatch(actFetchCategories(res.data))
            })
    )
}

export const actFetchCategories = (categories) => (
    {
        type: types.FETCH_CATEGORIES,
        categories
    }
)