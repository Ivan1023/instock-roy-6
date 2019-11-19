import React from 'react';
import './SpecificWarehousePage.scss';

class InventoryProducts extends React.Component {
    render() {
        return (
            <>
                <article className="main__content-list">
                    <div className="main__content-list__titles">
                        <span>ITEM</span>
                        <span>LAST ORDERED</span>
                        <span>LOCATION</span>
                        <span>QUANTITY</span>
                        <span>STATUS</span>
                    </div>
                    <Link to="/warehouses" className="main__content-list__items">
                        <div className="main__content-list__items">
                            <h2 className="main__content-list__items-title">Item</h2>
                            <span className="main__content-list__items-title"></span>
                        </div>
                        <div className="main__content-list__items">
                            <h2 className="main__content-list__address-title">Product Name Here</h2>
                            <span>Here is a very brief description of the product in the inventory...</span>
                        </div>
                        <div className="main__content-list__row">
                            <div className="main__content-list__address">
                                <h4>LAST ORDERED</h4>
                                <span>05/24/2018</span>
                            </div>
                            <div className="main__content-list__address">
                                <span>LOCATION</span>
                                <span>Toronto, CAN</span>
                            </div>
                            <div className="main__content-list__address">
                                <span>QUANTITY</span>
                                <span>12,000</span>
                            </div>
                            <div className="main__content-list__address">
                                <span>STATUS</span>
                                <span>In Stock</span>
                            </div>
                        </div>
                        <div className="main__content-list__arrowIcon main__content-list__desktopIcon"> </div>
                    </Link>
                </article>
            </>
        )
    }
}
export default InventoryProducts;