import React from 'react';
import './WareHouse.scss';

class WareHouse extends React.Component {
    render() {
        return (
            <article className="main__content-list">
                <div className="main__content-list__address">
                    <h2 className="main__content-list__address-title">Warehouse Number 1</h2>
                    <span>469 King St W, Toronto, ON</span>
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
            </article>
        )
    }
}
export default WareHouse;