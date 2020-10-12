import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Detail extends Component {
    constructor (props) {
        super();
        this.state = {
            show: false
        };
        this.validator = new SimpleReactValidator();
    }

    onSubmit (e) {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.saveUser();
            this.setState({
                show: false
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }

    onBlur (field) {
        this.validator.showMessageFor(field)
        let status = false;

        if (this.validator.allValid()) {
            status = true;
        }

        this.setState({
            show: status
        })
    }

    onValidate (field, rules = []) {
        return this.validator.message(field, this.props[field], rules, {className: 'text-danger'});
    }

    showForm = () => {
        if (this.props.showForm) {
            return (
                <>
                <form>
                    <div className="form-detail">
                        <div className="form-group">
                            <input
                                onChange={(e) => {this.props.handleChange(e); this.onBlur('name')}}
                                name="name" type="name"
                                className="form-control"
                                placeholder="Enter name"
                                id="name"
                                required
                                defaultValue={this.props.edit ? this.props.user.name : ''}
                                key={this.props.user.id}
                            />
                            {this.onValidate('name', ['required'])}
                        </div>
                        <div className="form-group">
                            <input
                                onChange={(e) => {this.props.handleChange(e); this.onBlur('email')}}
                                name="email" type="text"
                                className="form-control"
                                placeholder="Enter email"
                                id="email"
                                required
                                defaultValue={this.props.edit ? this.props.user.email : ''}
                                key={this.props.user.id}
                            />
                            {this.onValidate('email', ['required', 'email'])}
                        </div>
                    </div>
                    <button type="reset" onClick={(e) => this.props.reset()} className="btn btn-danger mr-4">Cancel</button>
                    <button
                        className="btn btn-primary"
                        disabled={!this.state.show}
                        onClick={(e) => {this.onSubmit(e)}}
                    >
                        Save
                    </button>
                </form>
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