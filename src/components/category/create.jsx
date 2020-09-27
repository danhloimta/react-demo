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

    render () {
        return (
            <div className="text-left">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            id="name"
                            defaultValue={this.props.create ? '' : this.props.category.name}
                            onChange={(e) => this.handleChange(e)}
                            key={this.props.category.name}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" type="reset"
                            onClick={(category) => this.props.getDataForm(this.state.category)}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCategory;
