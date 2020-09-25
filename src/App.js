import React from 'react';
import './App.css';
import CategoryList from './containers/category/index';
import Loading from './components/common/loading';

function App() {
    return (
        <>
            <Loading />
            <CategoryList />
        </>
    );
}

export default App;
