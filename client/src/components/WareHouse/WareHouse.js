import React from 'react';
import './WareHouse.scss';
import { Link } from 'react-router-dom';

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
                   <Link to ="/warehouses/warehouse" className="main__content-list__table">
                        <div className="main__content-list__row">
                            <div className="main__content-list__address">
                                <h2 className="main__content-list__address-title">Warehouse Number 1</h2>
                                <span>469 King St W, Toronto, ON</span>
                            </div>
                            <div className="main__content-list__arrowIcon main__content-list__tabletIcon"></div>
                        </div>
                        <div className="main__content-list__row">
                            <div className="main__content-list__address">
                                <span>Mara Weinberg</span>
                                <span>Warehouse Manager</span>
                            </div>
                            <div className="main__content-list__address">
                                <span>+1 416 678 2345</span>
                                <span>weinberg@instack.com</span>
                            </div>
                            <div className="main__content-list__address">
                                <span>Industrial, Automotive, Heavy, Mechanical, Engineering</span>
                            </div>
                        </div>
                        <div className="main__content-list__arrowIcon main__content-list__desktopIcon"> </div>
                    </Link>
                </article>
            </>
        )
    }
}
export default WareHouse;