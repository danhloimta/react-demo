import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/header/header';
import List from '../../components/body/list';
import Detail from '../../components/body/detail';
import './user.css'
import {
    getFromLocalStorage,
    saveToLocalStorage,
} from '../../helpers/helper';
import {isEqual, chunk, last, lastIndexOf} from 'lodash';

class User extends Component {
    constructor (props) {
        super();
        this.state = {
            users: [],
            timer: null,
            name: '',
            email: '',
            user: {},
            edit: false,
            showForm: false,
            activePage: 1,
            total: 0,
            perPage: 3,
            pageRange: 1,
            userPage: [],
            listActive: [],
        }
    }

    componentDidMount() {
        this.getListUser();
    }

    componentDidUpdate (prevProps, prevState) {
        if (!isEqual(prevState.users, this.state.users)) {
            this.handlePaginate();
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    saveUser () {
        if (this.state.name && this.state.email) {
            let users = this.state.users;

            if (this.state.edit) {
                let indexUserEdit = users.findIndex(i => i.id === this.state.user.id);
                let user = {id: this.state.user.id, name: this.state.name, email: this.state.email}
                users[indexUserEdit] = user;
            } else {
                users.push({
                    id: uuidv4(),
                    name: this.state.name,
                    email: this.state.email
                })
            }

            saveToLocalStorage('users', users);
            this.getListUser();
            this.reset()
            this.handlePaginate();
        } else {
            alert('Enter Name and Email');
        }
    }

    getListUser () {
        const users = getFromLocalStorage('users');

        if (users?.length) {
            this.setState({
                users: users
            });
        }
    }

    getUserEdit (user) {
        console.log(user);
        this.setState({
            user: user,
            name: user.name,
            email: user.email,
            edit: true,
            showForm: true
        })
    }

    deleteUser (user) {
        let users = this.state.users.filter((i) => i.id !== user.id);
        saveToLocalStorage('users', users);
        this.getListUser();

        if (this.state.listActive.length === 1) {
            this.setState({
                activePage: this.state.activePage - 1,
                listActive: last(this.state.userPage)
            })
        }
    }

    showForm () {
        this.setState({
            showForm: true
        })
    }

    reset () {
        this.setState({
            edit: false,
            name: '',
            email: '',
            showForm: false
        })
    }

    handlePaginate () {
        const total = this.state.users?.length || 0;
        const perPage = this.state.perPage;
        const pageRange = Math.ceil(total/perPage);

        let usersChunk = chunk(this.state.users, perPage);

        this.setState({
            total: total,
            pageRange: pageRange,
            userPage: usersChunk,
            listActive: usersChunk[this.state.activePage - 1]
        })
    }

    handlePageChange(pageNumber) {
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

    render() {
        return (
            <>
                <Header timer={this.state.timer} />

                <div className="row body">
                    <List 
                        users={this.state.listActive}
                        pageRange={this.state.pageRange}
                        total={this.state.total}
                        activePage={this.state.activePage}
                        perPage={this.state.perPage}
                        handlePageChange={(page) => this.handlePageChange(page)}
                        getUserEdit={(user) => this.getUserEdit(user)}
                        deleteUser={(user) => this.deleteUser(user)}
                        handleJumpToPage={(end) => this.handleJumpToPage(end)}
                    />
                    <Detail
                        saveUser={(user) => this.saveUser(user)}
                        handleChange={(e) => this.handleChange(e)}
                        user={this.state.user}
                        edit={this.state.edit}
                        reset={() => this.reset()}
                        showForm={this.state.showForm}
                        clickShowForm={(e) => this.showForm()}
                    />
                </div>
            </>
        );
    }
}

export default User;