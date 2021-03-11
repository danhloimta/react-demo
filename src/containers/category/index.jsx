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
import {
    fetchCategories,
    editShowForm,
    createCategory,
    pushCategoryAction
} from '../../store/modules/category/action'

class CategoryList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // categories: [],
            // showForm: false,
            // category: {},
            // create: true,
        }
    }

    componentDidMount () {
        this.props.getListCategory();
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
        if (this.state.create) {
            return this.props.createCategory(category);
            // return this.saveCategory(category);
        }

        this.updateCategory(this.state.category.id, category);
    }

    getDataFormEdit () {
        let categoryEdit = this.props.categories.filter(category => category.id === this.props.categoriesAction[0])[0]
        this.props.editShowForm()
        this.setState({
            category: categoryEdit,
            create: false
        })
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
                            // onClick={(e) => this.handleDelete(id)}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="float-right mb-3">
                        <button className="btn btn-warning" onClick={ () => {this.props.editShowForm()} }>Add new</button>
                    </div>
                    <div className="clearfix"></div>
                </div>

                { 
                    this.props.showForm ?
                        <CreateCategory
                            name={this.state.name}
                            getDataForm={(category) => this.getDataForm(category)}
                            category={this.state.category}
                            create={this.state.create}
                            editShowForm={() => this.props.editShowForm()}
                        />
                    : null
                }

                <CategoryTable
                    categories={this.props.categories}
                    categoriesAction={this.props.categoriesAction}
                    // getDataFormEdit={(category) => this.getDataFormEdit(category)}
                    // deleteCategory={(id) => this.deleteCategory(id)}
                    pushCategoryAction={(id, checked, checkAll) => this.props.pushCategoryAction(id, checked, checkAll)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state');
    console.log(state);
    const { categoryReducer } = state
    return categoryReducer
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log('dispatch', dispatch);
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
