import React from 'react';

const CategoryTable = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>index</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props?.categories?.length > 0 ? (
                        props.categories.map(category => {
                            const {id, name} = category;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <button className="btn btn-success mr-1">Edit</button>
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

export default CategoryTable;
