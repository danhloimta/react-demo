import { request } from './request';

const category = '/categories';

const fetchDataCategory = async () => {
    const {data} = await request().get(`${category}`);

    return data;
}

const saveCategory = async (obj) => {
    await request().post(`${category}`, {name: obj.name});

    return true;
}

export {
    fetchDataCategory,
    saveCategory
};
