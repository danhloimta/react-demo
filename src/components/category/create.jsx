import React, {Component} from 'react';

class CreateCategory extends Component {
    constructor(props) {
        super()
        this.state = {
        }
    }

    handleChange (event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit () {
        let category = {
            name: this.state.name
        };

        this.props.getDataForm(category);
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
                        <button className="btn btn-info mr-3" type="reset"
                            onClick={(e) => this.onSubmit()}
                        >
                            Save
                        </button>
                        <button className="btn btn-danger" type="reset"
                            onClick={() => {this.props.editShowForm()}}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCategory;
