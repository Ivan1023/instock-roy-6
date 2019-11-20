import React from 'react';
import './InventoryCard.scss';
import { Link } from 'react-router-dom';


class InventoryCard extends React.Component {
    render() {
        return (
            <>
                <article className="main__content-list">
                    
                    <div className="main__content-list__table">
                        <div className="main__content-list__row">
                            <div className="main__content-list__item">
                                <Link to="/inventory-products"><h2 className="main__content-list__item-title">Product Name Here</h2></Link>
                                <span>Here is a very brief description of the product...</span>
                            </div>
                            <div className="main__content-list__arrowIcon main__content-list__tabletIcon"></div>
                        </div>
                        
                        <div className="main__content-list__dotsIcon main__content-list__desktopIcon"> </div>
                    </div>
                </article>
            </>
        )
    }
}
export default InventoryCard;