import React, {Component} from 'react';

class CreateCategory extends Component {
    constructor(props) {
        super()
        this.state = {
            category: {
                name: '',
            }
        }
    }

    handleChange (event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            category: {
                [name]: value
            }
        })
    }

    clear () {
        this.setState({
            category: {
                name: ''
            }
        })
    }

    render () {
        return (
            <div className="text-left">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input name="name" onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Enter name" id="name" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" type="reset"
                            onClick={(name) => this.props.getDataForm(this.state.category)}
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCategory;
