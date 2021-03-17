import { request } from './request';

const category = '/categories';

const fetchDataCategory = () => request().get(`${category}`);

const saveCategory = (obj) => request().post(`${category}`, obj);

const updateCategoryApi = (id, obj) => request().put(`${category}/${id}`, {name: obj.name});

const deleteCategoryApi = (ids) => request().post(`${category}/delete`, {ids: ids})

export {
    fetchDataCategory,
    saveCategory,
    updateCategoryApi,
    deleteCategoryApi
};
