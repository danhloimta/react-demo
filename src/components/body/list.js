import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import Row from './row';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // showBtn: false,
        };
    }

    handlePageChange = (pageNumber) => {
        this.props.handlePageChange(pageNumber);
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
                            this.props.users?.length > 0 ? (
                                this.props.users.map((user) => {
                                    return (
                                        <Row
                                            key={user.id}
                                            user={user}
                                            getUserEdit={(user) => this.props.getUserEdit(user)}
                                            deleteUser={(user) => this.props.deleteUser(user)}
                                        />
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
                    this.props.users?.length > 0 ? 
                        <Pagination
                            activePage={this.props.activePage}
                            itemsCountPerPage={this.props.perPage}
                            totalItemsCount={this.props.total}
                            pageRangeDisplayed={this.props.pageRange}
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