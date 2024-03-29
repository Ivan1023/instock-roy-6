import React from 'react';
import './WareHouse.scss';
import { Link } from 'react-router-dom';
import RemoveButton from '../RemoveButton/RemoveButton';

class WareHouse extends React.Component {
    render() {
        return (
            <>
                <article className="main__content-list">
                    <div className="main__content-list__titles">
                        <div className="main__content-list__titles-firstTitle">
                            <span>WAREHOUSE</span>
                        </div>
                        <div className="main__content-list__titles-secondTitle">
                            <span>CONTACT</span>
                            <span>CONTACT INFORMATION</span>
                            <span>CATEGORIES</span>
                            <span></span>
                        </div>
                    </div>
                    {this.props.warehouses.map((item) => {
                        return (
                            <div className="main__content-list__table" key={item.id}>
                                <div className="main__content-list__row">
                                    <div className="main__content-list__address">
                                        <h2 className="main__content-list__address-title">{item.name}</h2>
                                        <span>{item.address.street}</span>
                                    </div>
                                    <Link to={`/locations/${item.id}`}><div className="main__content-list__arrowIcon main__content-list__tabletIcon"></div></Link>
                                </div>
                                <div className="main__content-list__row">
                                    <div className="main__content-list__address">
                                        <span>{item.contact.name}</span>
                                        <span>{item.contact.title}</span>
                                    </div>
                                    <div className="main__content-list__address">
                                        <span>{item.contact.phone}</span>
                                        <span>{item.contact.email}</span>
                                    </div>
                                    <div className="main__content-list__address flex">
                                        <span>{item.inventoryCategories}</span>
                                        <RemoveButton remove={this.props.remove} id={item.id}/>
                                    </div>
                                </div>
                                <Link to={`/locations/${item.id}`}><div className="main__content-list__arrowIcon main__content-list__desktopIcon"> </div></Link>
                            </div>
                        );
                    })}
                </article>
            </>
        )
    }
}
export default WareHouse;