import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/header/header';
import List from '../../components/body/list';
import Detail from '../../components/body/detail';
import './user.css'
import {
    getFromLocalStorage,
    saveToLocalStorage,
} from '../../helpers/helper'

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
            showForm: false
        }
    }

    componentDidMount() {
        this.getListUser();
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

    render() {
        return (
            <>
                <Header timer={this.state.timer} />

                <div className="row body">
                    <List 
                        users={this.state.users}
                        getUserEdit={(user) => this.getUserEdit(user)}
                        deleteUser={(user) => this.deleteUser(user)}
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