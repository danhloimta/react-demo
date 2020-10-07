import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import {required, email} from '../../validation/validation'

class Detail extends Component {
    constructor (props) {
        super();
        this.state = {}
    }

    onSubmit () {
        this.form.validateAll();

        if ( this.checkBtn.context._errors.length === 0 ) {
            this.props.saveUser()
        }
    }

    showForm = () => {
        if (this.props.showForm) {
            return (
                <>
                <Form ref={c => { this.form = c }}>
                    <div className="form-detail">
                        <div className="form-group">
                            <Input
                                onChange={(e) => {this.props.handleChange(e)}}
                                name="name" type="name"
                                className="form-control"
                                placeholder="Enter name"
                                id="name"
                                required
                                defaultValue={this.props.edit ? this.props.user.name : ''}
                                key={this.props.user.id}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                onChange={(e) => {this.props.handleChange(e)}}
                                name="email" type="email"
                                className="form-control"
                                placeholder="Enter email"
                                id="email"
                                required
                                defaultValue={this.props.edit ? this.props.user.email : ''}
                                key={this.props.user.id}
                                validations={[required, email]}
                            />
                        </div>
                    </div>
                    <button type="reset" onClick={(e) => this.props.reset()} className="btn btn-danger mr-4">Cancel</button>
                    <button
                        type="reset"
                        className="btn btn-primary"
                        onClick={(e) => {this.onSubmit()}}
                    >
                        Save
                    </button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
                </>
            )
        } else {
            return (
                <button onClick={(e) => this.props.clickShowForm()} className="btn btn-primary mr-4">Create</button>
            )
        }
    }

    render() {
        return (
            <div className="col-md-6 pt-4">
                <h5>Detail</h5>
                {this.showForm()}
            </div>
        );
    }
}

export default Detail;