import React, { Component } from 'react';

class Row extends Component {
    constructor (props) {
        super();
        this.state = {
            showBtn: false,
        };
    }

    handleDelete (user) {
        if(window.confirm('Are you sure')) {
            this.props.deleteUser(user);
        }
    }

    onHover () {
        this.setState({
            showBtn: !this.state.showBtn
        })
    }

    onEdit (user) {
        this.props.getUserEdit(user);
    }

    render() {
        const {user} = this.props;
        return (
            <>
                <tr
                    onMouseEnter={(e) => this.onHover()}
                    onMouseLeave={() => {this.onHover()}}
                >
                    <td>{user.name}</td>
                    <td className="hover">
                        {
                            this.state.showBtn ? (
                                <div className="button-action">
                                    <button
                                        type="reset"
                                        className="btn btn-sm btn-success mr-2"
                                        onClick={(e) => {this.onEdit(user)}}
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
                            ) : (
                                (
                                    <span>{user.email}</span>
                                )
                            )
                        }
                    </td>
                </tr>
            </>
        );
    }
}

export default Row;