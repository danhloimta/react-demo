import React, { Component } from 'react';
import CategoryTable from '../../components/category/index';
import fetchDataCategory from '../../api/apiCategory';

class CategoryList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [],
            category: {}
        }
    }

    componentDidMount () {
        fetchDataCategory().then(res => {
            this.setState({
                categories: res
            });
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-info text-white">
                    <h1>Category List</h1>
                    <p>Bootstrap is the most popular HTML, CSS...</p>
                </div>
                <CategoryTable categories={this.state.categories} />
            </div>
        )
    }
}

export default CategoryList;
