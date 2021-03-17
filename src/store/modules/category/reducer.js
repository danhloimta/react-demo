import * as types from './type';

const categoryInitialState = {
    category: {},
    categories: [],
    create: true,
    showForm: false,
    categoriesAction: []
}

const categoryReducer = (state = categoryInitialState, action) => {
    let {id, category, categories} = action;
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {...state, categories}
        case types.CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, category],
                category: category
            }
        case types.EDIT_CATEGORY:
            return {
                ...state,
                category: category,
                create: false
            }
        case types.UPDATE_CATEGORY:
            categories = updateCategory([...state.categories], category)
            return {
                ...state,
                categories,
                category
            }
        case types.SHOW_FORM:
            return {...state, showForm: !state.showForm}
        case types.PUSH_CATEGORY:
            return handlePushCategory(state, id, action.checked, action.checkAll)
        default:
            return state
    }
}

const handlePushCategory = (state, id, checked, checkAll) => {
    if (checkAll) {
        return handleCheckAll(state, checked)
    }

    if (checked) {
        return {...state, categoriesAction: [...state.categoriesAction, id]}
    }

    const index = state.categoriesAction.indexOf(id);

    if (index >= 0) {
        let categoriesAction = [...state.categoriesAction]
        categoriesAction.splice(index, 1)

        return {...state, categoriesAction: categoriesAction}
    }

    return {...state}
}

const handleCheckAll = (state, checked) => {
    if (checked) {
        let categoryIds = state.categories.map(cate => cate.id);

        return {...state, categoriesAction: categoryIds}
    } else if (!checked) {
        return {...state, categoriesAction: []}
    }
}

const updateCategory = (categories, newCategory) => {
    categories.map((category, key) => {
        if (category.id === newCategory.id) {
            categories[key] = newCategory
        }
        return categories;
    })

    return categories;
}

export default categoryReducer;