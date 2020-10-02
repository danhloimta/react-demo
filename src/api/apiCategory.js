import { request } from './request';

const category = '/categories';

const fetchDataCategory = () => request().get(`${category}`);

const saveCategory = async (obj) => {
    await request().post(`${category}`, {name: obj.name});

    return true;
}

const updateCategory = async (id, obj) => {
    await request().put(`${category}/${id}`, {name: obj.name});

    return true;
}

const deleteCategory = async (id) => {
    await request().delete(`${category}/${id}`);

    return true;
}

export {
    fetchDataCategory,
    saveCategory,
    updateCategory,
    deleteCategory
};
