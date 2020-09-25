import { request } from './request';

const category = '/categories';

const fetchDataCategory = async () => {
    const {data} = await request().get(`${category}`);

    return data;
}

const saveCategory = async () => {
    await request.post(`${category}`);

    return true;
}

export {
    fetchDataCategory,
    saveCategory
};