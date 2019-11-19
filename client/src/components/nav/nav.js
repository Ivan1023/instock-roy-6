import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss'
import logo from '../../assets/Logo/Logo-instock.svg'



export default class Nav extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="nav__logo-container">
                    <img className="nav__logo" src={logo} alt="instock logo"></img>
                </div>
                <div className="nav__links-container">
                    <Link className="nav__inventory-link">Inventory</Link>
                    <Link className="nav__location-link">Location</Link>
                </div>
            </div>
            
        )
    }
}
