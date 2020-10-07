import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import {isEqual, chunk} from 'lodash';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePage: 1,
            total: 0,
            perPage: 3,
            pageRange: 1,
            userPage: [],
            listActive: [],
        }
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    componentDidUpdate (prevProps) {
        this.handlePaginate(prevProps)

    }

    handleDelete (user) {
        if(window.confirm('Are you sure')) {
            this.props.deleteUser(user);
        }
    }

    handlePageChange(pageNumber) {
        this.setState({
            activePage: pageNumber,
            listActive: this.state.userPage[pageNumber - 1]
        });
    }

    handlePaginate (prevProps) {
        if (!isEqual(prevProps.users, this.props.users)) {
            const total = this.props.users.length || 0;
            const pageRange = Math.ceil(total/this.state.perPage);

            let usersChunk = chunk(this.props.users, this.state.perPage);

            this.setState({
                total: total,
                pageRange: pageRange,
                userPage: usersChunk,
                listActive: usersChunk[this.state.activePage - 1]
            })
        }
    }

    render() {
        return (
            <div className="col-md-6 body-info pt-4">
                <h5>List</h5>
                <table className="table table-striped table-bordered table-hover mt-2 mb-4">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listActive?.length > 0 ? (
                                this.state.listActive.map((user) => {
                                    const {name, email, id} = user;
                                    return (
                                        <tr
                                            key={id}
                                        >
                                            <td>{name}</td>
                                            <td className="hover">
                                                <span>{email}</span>
                                                <div className="button-action">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-success mr-2"
                                                        onClick={(e) => {this.props.getUserEdit(user)}}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-danger"
                                                        onClick={(e) => this.handleDelete(user)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="2">No data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    this.state.listActive?.length > 0 ? 
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.perPage}
                            totalItemsCount={this.state.total}
                            pageRangeDisplayed={this.state.pageRange}
                            prevPageText="Prev"
                            nextPageText="Next"
                            itemClass="page-item"
                            linkClass="page-link"
                            onChange={this.handlePageChange}
                        />
                        : (<></>)
                }
            </div>
        );
    }
}

export default List;