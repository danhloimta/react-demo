import { request } from './request';

const category = '/categories';

const fetchDataCategory = () => request().get(`${category}`);

const saveCategory = (obj) => request().post(`${category}`, obj);

const updateCategoryApi = (id, obj) => request().put(`${category}/${id}`, {name: obj.name});

const deleteCategory = async (id) => {
    await request().delete(`${category}/${id}`);

    return true;
}

export {
    fetchDataCategory,
    saveCategory,
    updateCategoryApi,
    deleteCategory
};
