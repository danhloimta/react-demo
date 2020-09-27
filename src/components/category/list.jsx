import React from 'react';

class CategoryTable extends React.Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props?.categories?.length > 0 ? (
                            this.props.categories.map(category => {
                                const {id, name} = category;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>
                                            <button className="btn btn-success mr-1"
                                                onClick={(e) => { this.props.getDataFormEdit(category) }}
                                            >
                                                Edit
                                            </button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
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
