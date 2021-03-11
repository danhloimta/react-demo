import React from 'react';
class CategoryTable extends React.Component {
    constructor (props) {
        super();
    }

    handleDelete (id) {
        this.props.dispatch({type: 'ADD'})
        if (window.confirm('Are you sure')) {
            this.props.deleteCategory(id)
        }
    }

    handleCheckbox (e, id, checkAll = false) {
        const checked = e.currentTarget.checked;
        this.props.pushCategoryAction(id, checked, checkAll)
    }

    handleChecked (id, checkBox) {
        const index = checkBox.indexOf(id);
        if (index >= 0) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            <label className="form-check-label">
                                <input type="checkbox" value="" onClick={(e) => this.handleCheckbox(e, null, true)} />
                            </label>
                        </th>
                        <th>Index</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props?.categories?.length > 0 ? (
                            this.props.categories.map((category, key) => {
                                const {id, name} = category;
                                return (
                                    <tr key={id}>
                                        <td>
                                        <label className="form-check-label">
                                            <input type="checkbox" onChange={e => {}} checked={this.handleChecked(id, this.props.categoriesAction)} onClick={(e) => this.handleCheckbox(e, id)} />
                                        </label>
                                        </td>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan="3">No category found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default CategoryTable;
