import { request } from './request';

const category = '/categories';

const fetchDataCategory = async () => {
    const {data} = await request().get(`${category}`);

    return data;
}

export default fetchDataCategory;