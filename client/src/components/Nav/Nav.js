import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss'
import logo from '../../assets/Logo/Logo-instock.svg'



export default class Nav extends React.Component {
    render() {
        return (
            <header className="nav">
                <Link to ="/" className="nav__logo-container">
                    <img className="nav__logo" src={logo} alt="instock logo"></img>
                </Link>
                <div className="nav__links-container">
                    <NavLink exact to="/" activeClassName="active" className="nav__inventory-link">Inventory</NavLink>
                    <NavLink exact to="/locations" activeClassName="active" className="nav__location-link">Locations</NavLink>
                </div>
            </header>
        )
    }
}
