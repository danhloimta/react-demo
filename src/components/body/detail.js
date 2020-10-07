import React, { Component } from 'react';

class Detail extends Component {
    constructor (props) {
        super();
        this.state = {}
    }

    onSubmit () {
        this.props.saveUser()
    }

    showForm = () => {
        if (this.props.showForm) {
            return (
                <>
                <form>
                    <div className="form-detail">
                        <div className="form-group">
                            <input
                                onChange={(e) => {this.props.handleChange(e)}}
                                name="name" type="name"
                                className="form-control"
                                placeholder="Enter name"
                                id="name"
                                required
                                defaultValue={this.props.edit ? this.props.user.name : ''}
                                key={this.props.user.id}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={(e) => {this.props.handleChange(e)}}
                                name="email" type="email"
                                className="form-control"
                                placeholder="Enter email"
                                id="email"
                                required
                                defaultValue={this.props.edit ? this.props.user.email : ''}
                                key={this.props.user.id}
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