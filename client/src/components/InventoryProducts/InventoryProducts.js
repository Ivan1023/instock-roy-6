import React from 'react';
import './InventoryProducts.scss';
import { Link } from 'react-router-dom';

class InventoryProducts extends React.Component {
    render() {
        return (
            <article className="main__list">
                <div className="main__list-titles">
                    <div className="main__list-titles__head">
                        <span>Item</span>
                    </div>
                    <div className="main__list-titles__head">
                        <span>Last Ordered</span>
                    </div>
                    <div className="main__list-titles__head">
                        <span>Location</span>
                    </div>
                    <div className="main__list-titles__head">
                        <span>Quantity</span>
                    </div>
                    <div className="main__list-titles__head">
                        <span>Status</span>
                    </div>
                </div>
                <Link to="/warehouses" className="main__list-items">
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">Item</h4>
                    </div>
                    <div className="main__list-items__group">
                        <h3>Product Name Here</h3>
                        <span>Here is a very brief description of the product in the inventory...</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">LAST ORDERED</h4>
                        <span>05/24/2018</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">LOCATION</h4>
                        <span>Toronto, CAN</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">QUANTITY</h4>
                        <span>12,000</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">STATUS</h4>
                        <span>In Stock</span>
                    </div>
                    <div className="main__list-items__icon"></div>
                </Link>
                <Link to="/warehouses" className="main__list-items">
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">Item</h4>
                    </div>
                    <div className="main__list-items__group">
                        <h3>Product Name Here</h3>
                        <span>Here is a very brief description of the product in the inventory...</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">LAST ORDERED</h4>
                        <span>05/24/2018</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">LOCATION</h4>
                        <span>Toronto, CAN</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">QUANTITY</h4>
                        <span>12,000</span>
                    </div>
                    <div className="main__list-items__group">
                        <h4 className="main__list-items__group-title">STATUS</h4>
                        <span>In Stock</span>
                    </div>
                    <div className="main__list-items__icon"></div>
                </Link>

            </article>
        )
    }
}
export default InventoryProducts;