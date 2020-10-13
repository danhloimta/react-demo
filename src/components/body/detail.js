import React, { Component } from 'react';
import InputComponent from './common/InputComponent';

class Detail extends Component {
    constructor (props) {
        super();
    }

    showForm = () => {
        if (this.props.showForm) {
            return (
                <>
                    <InputComponent
                        handleChange={(e) => this.props.handleChange(e)}
                        saveUser={() => this.props.saveUser()}
                        reset={(e) => this.props.reset()}
                        user={this.props.user}
                        edit={this.props.edit}
                        name={this.props.name}
                        email={this.props.email}
                    >
                        <input
                            name="name" type="text"
                            placeholder="Enter name"
                            keyChild={this.props.user.id}
                            defaultValue={this.props.edit ? this.props.user.name : ''}
                            rules="required"
                        />
                        <input
                            name="email" type="text"
                            placeholder="Enter email"
                            keyChild={this.props.user.id}
                            defaultValue={this.props.edit ? this.props.user.email : ''}
                            rules="required,email"
                        />
                    </InputComponent>
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