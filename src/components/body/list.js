import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import * as keys from '../../constant/constant';
import Row from './row';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activePage: 1,
            // total: 0,
            // perPage: 3,
            // pageRange: 1,
            // userPage: [],
            // listActive: [],
        }
    }

    componentDidUpdate (prevProps) {
        // this.props.handlePaginate(prevProps)
    }

    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyPress, false);
        this.handleKeyPress();
    }

    handleKeyPress = (e) => {
        let activePage = this.props.activePage;
        switch (e?.key) {
            case keys.pageUp:
                console.log(2222);
                this.props.handlePageChange(++activePage)
                break;
            case keys.pageDown:
                this.props.handlePageChange(--activePage)
                break;
            case keys.home:
                this.props.handleJumpToPage(false)
                break;
            case keys.end:
                this.props.handleJumpToPage()
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

    // handlePageChange = (pageNumber) => {
    //     console.log(pageNumber);
    //     const listActive = this.state.userPage[pageNumber - 1];
    //     if (typeof listActive !== 'undefined') {
    //         this.setState({
    //             activePage: pageNumber,
    //             listActive: listActive
    //         });
    //     }
    // }

    // handleJumpToPage(end = true) {
    //     console.log(77788);
    //     const {userPage} = this.state;
    //     let listActive = userPage[0];
    //     let activePage = 1;

    //     if (end) {
    //         listActive = last(userPage);
    //         activePage = lastIndexOf(userPage, listActive) + 1;
    //     }
    //     console.log(activePage, end);
    //     this.setState({
    //         activePage: activePage,
    //         listActive: listActive
    //     })
    // }

    // handlePaginate (prevProps) {
    //     if (!isEqual(prevProps.users, this.props.users)) {
    //         const total = this.props.users.length || 0;
    //         const pageRange = Math.ceil(total/this.state.perPage);

    //         let usersChunk = chunk(this.props.users, this.state.perPage);

    //         this.setState({
    //             total: total,
    //             pageRange: pageRange,
    //             userPage: usersChunk,
    //             listActive: usersChunk[this.state.activePage - 1]
    //         })
    //     }
    // };

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