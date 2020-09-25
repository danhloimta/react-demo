import React, { Component } from 'react';
import CategoryTable from '../../components/category/index';
import {fetchDataCategory, saveCategory} from '../../api/apiCategory';
import CreateCategory from '../../components/category/create';

class CategoryList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [],
            // category: {},
            create: false,
        }
    }

    componentDidMount () {
        fetchDataCategory().then(res => {
            this.setState({
                categories: res
            });
        })
    }

    addNew () {
        this.setState({
            create: !this.state.create
        });
    }

    saveCategory () {

    }

    getDataForm (name) {

    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-info text-white">
                    <h1>Category List</h1>
                    <p>Bootstrap is the most popular HTML, CSS...</p>
                </div>
                <div className="text-right mb-3">
                    <button className="btn btn-warning" onClick={ () => {this.addNew()} }>Add new</button>
                </div>
                { this.state.create ? <CreateCategory name={this.state.name} getDataForm={() => this.getDataForm()} /> : null }

                <CategoryTable categories={this.state.categories} />
            </div>
        )
    }
}

export default CategoryList;
