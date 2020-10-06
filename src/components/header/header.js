import React, { Component } from 'react';
import './header.css'
import {
    setTime
} from '../../helpers/helper'

class Header extends Component {
    constructor () {
        super();
        this.state = {
            timer: null,
            init: new Date(),
        }
    }

    componentDidMount () {
        this.createTimeLoad();
    }

    createTimeLoad () {
        setInterval(() => {
            this.setState({
                timer: setTime(this.state.init),
            })
        }, 1000);
    }

    render() {
        return (
            <div className="header row">
                <div className="header-info col-md-6 text-left pl-4">
                    Header
                </div>
                <div className="header-info col-md-6 text-right pr-4">
                    {this.state.timer}
                </div>
            </div>
        );
    }
}

export default Header;