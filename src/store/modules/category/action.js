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

export const editShowForm = () => {
    return (dispatch) => (
        dispatch(actShowForm())
    )
}

export const actShowForm = () => (
    {
        type: types.SHOW_FORM
    }
)

export const createCategory = (category) => {
    return (dispatch) => (
        saveCategory(category)
            .then(res => {
                dispatch(actCreateCategory(res.data))
            })
    )
}

export const actCreateCategory = (category) => (
    {
        type: types.CREATE_CATEGORY,
        category
    }
)

export const pushCategoryAction = (id, checked, checkAll = false) => (
    (dispatch) => (
        dispatch(actPushCategory(id, checked, checkAll))
    )
)

export const actPushCategory = (id, checked, checkAll) => (
    {
        type: types.PUSH_CATEGORY,
        id,
        checked,
        checkAll
    }
)