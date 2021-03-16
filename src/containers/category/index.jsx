import React, { Component } from 'react';
import CategoryTable from '../../components/category/list';
import CreateCategory from '../../components/category/create';
import { connect } from 'react-redux';
import {
    fetchCategories,
    editShowForm,
    createCategory,
    pushCategoryAction,
    editCategory,
    updateCategory
} from '../../store/modules/category/action'

class CategoryList extends Component {
    constructor (props) {
        super()
    }

    componentDidMount () {
        this.props.getListCategory();
    }

    getDataForm (category) {
        if (this.props.create) {
            return this.props.createCategory(category);
        }

        this.props.updateCategory(this.props.category.id, category);
    }

    getDataFormEdit () {
        let categoryEdit = this.props.categories.filter(category => category.id === this.props.categoriesAction[0])[0]
        this.props.editShowForm()
        this.props.editCategory(categoryEdit)
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-info text-white">
                    <h1>Category List</h1>
                    <p>Bootstrap is the most popular HTML, CSS...</p>
                </div>
                <div className="action">
                    <div className="float-left mb-3">
                        <button className="btn btn-success mr-1"
                            disabled={ this.props.categoriesAction.length > 1 || this.props.categoriesAction.length === 0}
                            onClick={(e) => { this.getDataFormEdit() }}
                        >
                            Edit
                        </button>
                        <button className="btn btn-danger"
                            disabled={ this.props.categoriesAction.length === 0}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="float-right mb-3">
                        <button className="btn btn-warning" disabled={this.props.showForm} onClick={ () => {this.props.editShowForm()} }>Add new</button>
                    </div>
                    <div className="clearfix"></div>
                </div>

                { 
                    this.props.showForm ?
                        <CreateCategory
                            getDataForm={(category) => this.getDataForm(category)}
                            category={this.props.category}
                            create={this.props.create}
                            editShowForm={() => this.props.editShowForm()}
                        />
                    : null
                }

                <CategoryTable
                    categories={this.props.categories}
                    categoriesAction={this.props.categoriesAction}
                    pushCategoryAction={(id, checked, checkAll) => this.props.pushCategoryAction(id, checked, checkAll)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { categoryReducer } = state
    return categoryReducer
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListCategory: () => {
            dispatch(fetchCategories())
        },
        editShowForm: () => {
            dispatch(editShowForm())
        },
        createCategory: (category) => {
            dispatch(createCategory(category))
        },
        pushCategoryAction: (id, checked, checkAll) => {
            dispatch(pushCategoryAction(id, checked, checkAll))
        },
        editCategory: (category) => {
            dispatch(editCategory(category))
        },
        updateCategory: (id, category) => {
            dispatch(updateCategory(id, category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
