import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class InputComponent extends Component {
    constructor (props) {
        super();
        this.state = {
            show: false,
        }
        this.validator = new SimpleReactValidator();
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

    onValidate (field, rulesString) {
        const rules = rulesString.split(',');
        return this.validator.message(field, this.props[field], rules, {className: 'text-danger'});
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

    render() {
        return (
            <>
                {
                    this.props.children.map((child, index) => {
                        const { name, keyChild, defaultValue, rules, placeholder } = child.props;
                        return <div className="form-group" key={index}>
                            <child.type
                                className="form-control"
                                type="text"
                                defaultValue={defaultValue}
                                onChange={(e) => {this.props.handleChange(e); this.onBlur('email')}}
                                key={keyChild}
                                name={name}
                                placeholder={placeholder}
                            />
                            {this.onValidate(name, rules)}

                        </div>
                    }
                    )
                }

                <button
                    type="reset"
                    onClick={(e) => this.props.reset()}
                    className="btn btn-danger mr-4"
                >
                    Cancel
                </button>
                <button
                    className="btn btn-primary"
                    disabled={!this.state.show}
                    onClick={(e) => {this.onSubmit(e)}}
                >
                    Save
                </button>
            </>
        );
    }
}

export default InputComponent;