import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Drop extends Component {
    state = {
        open: false
    }
    handleClick = () => {
        this.setState({ open: !this.state.open });
    }
    render() {
        const { open } = this.state;
        return (
            <div className={`link ${open ? 'openLink' : ''}`}>
                <span onClick={this.handleClick}>Our Services<i className={`fas fa-chevron-down ${open ? 'fas fa-chevron-up' : ''}`} style={{ margin: "5px" }}></i></span>
                <div className={`menu ${open ? 'open' : ''}`}>
                    <ul>
                        <li><NavLink to="/loremIpsum">loremIpsum</NavLink></li>
                        <li><NavLink to="/loremIpsum">loremIpsum</NavLink></li>
                        <li><NavLink to="/loremIpsum">loremIpsum</NavLink></li>
                        <li><NavLink to="/loremIpsum">loremIpsum</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Drop;