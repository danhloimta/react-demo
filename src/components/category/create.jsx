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
        console.log(this.props);
        return (
            <div className="text-left">
                <div className="form-group">
                    <label htmlFor="email">Name:</label>
                    <input name="name" onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Enter name" id="name" />
                </div>
                <div className="form-group">
                    <button className="btn btn-info">Submit</button>
                </div>
            </div>
        )
    }
}

export default CreateCategory;
