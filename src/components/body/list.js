import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import {isEqual, chunk, findLastIndex, last, lastIndexOf} from 'lodash';
import * as keys from '../../constant/constant';

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
    }

    componentDidUpdate (prevProps) {
        this.handlePaginate(prevProps)
    }

    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyPress, false);
        this.handleKeyPress();
    }

    handleKeyPress = (e) => {
        let activePage = this.state.activePage;
        switch (e?.key) {
            case keys.pageUp:
                this.handlePageChange(++activePage)
                break;
            case keys.pageDown:
                this.handlePageChange(--activePage)
                break;
            case keys.home:
                this.handleJumpToPage(false)
                break;
            case keys.end:
                this.handleJumpToPage()
                break;

            default:
                break;
        }
    }

    handleDelete (user) {
        if(window.confirm('Are you sure')) {
            this.props.deleteUser(user);
        }
    }

    handlePageChange = (pageNumber) => {
        const listActive = this.state.userPage[pageNumber - 1];
        if (typeof listActive !== 'undefined') {
            this.setState({
                activePage: pageNumber,
                listActive: listActive
            });
        }
    }

    handleJumpToPage(end = true) {
        const {userPage} = this.state;
        let listActive = userPage[0];
        let activePage = 1;

        if (end) {
            listActive = last(userPage);
            activePage = lastIndexOf(userPage, listActive) + 1;
        }
        
        this.setState({
            activePage: activePage,
            listActive: listActive
        })
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