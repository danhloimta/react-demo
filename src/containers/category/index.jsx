import React, { Component } from 'react';
import CategoryTable from '../../components/category/list';
import {
    fetchDataCategory,
    saveCategory,
    updateCategory,
    deleteCategory
} from '../../api/apiCategory';
import CreateCategory from '../../components/category/create';
import { connect } from 'react-redux';

class CategoryList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [],
            showForm: false,
            category: {},
            create: true,
        }
    }

    componentDidMount () {
        // this.getDataCategory();
        // this.props.getListCategory();
    }

    getDataCategory () {
    //     fetchDataCategory().then(res => {
    //         this.setState({
    //             categories: res
    //         });
    //     })
    }

    showForm () {
        // this.setState({
        //     showForm: !this.state.showForm
        // });
    }

    saveCategory (category) {
        // saveCategory(category)
        //     .then(() => {
        //         this.getDataCategory();
        //     })
    }

    updateCategory (id, category) {
        // updateCategory(id, category)
        //     .then(() => {
        //         this.setState({
        //             showForm: false,
        //             create: true
        //         })
        //         this.getDataCategory();
        //     })
    }

    getDataForm (category) {
        // if (this.state.create) {
        //     return this.saveCategory(category);
        // }

        // this.updateCategory(this.state.category.id, category);
    }

    getDataFormEdit (category) {
        // this.setState({
        //     category: category,
        //     showForm: true,
        //     create: false
        // })
    }

    deleteCategory(id) {
        // deleteCategory(id)
        //     .then(() => {
        //         this.getDataCategory();
        //     });
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-info text-white">
                    <h1>Category List</h1>
                    <p>Bootstrap is the most popular HTML, CSS...</p>
                </div>
                <div className="text-right mb-3">
                    <button className="btn btn-warning" onClick={ () => {this.showForm()} }>Add new</button>
                </div>

                { 
                    this.state.showForm ?
                        <CreateCategory
                            name={this.state.name}
                            getDataForm={(category) => this.getDataForm(category)}
                            category={this.state.category}
                            create={this.state.create}
                        />
                    : null
                }

                <CategoryTable
                    categories={this.state.categories}
                    getDataFormEdit={(category) => this.getDataFormEdit(category)}
                    deleteCategory={(id) => this.deleteCategory(id)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListCategory: () => {
            dispatch({type: 'GET_LIST'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
