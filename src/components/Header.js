import React, { Component } from 'react'
import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }


    render() {
        return (
            <div className="heading">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Vaccine Distribution Management</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header
