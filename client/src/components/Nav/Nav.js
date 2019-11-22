import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/" className="nav__inventory-link nav__active-link">Inventory</Link>
                    <Link to="/location" className="nav__location-link">Locations</Link>
                </div>
            </header>
        )
    }
}
