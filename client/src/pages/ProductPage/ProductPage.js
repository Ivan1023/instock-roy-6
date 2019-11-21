import React from 'react';
import './ProductPage.scss';
import { Link } from 'react-router-dom';

class InventoryProduct extends React.Component {

    render() {
        return (

            <>
                <main>
                    <section className="product__content">
                        <article className="product__content-box">
                        <Link to="/"><div className="product__content-icon"></div></Link>
                            <h1 className="product__content-box__title">Product Name</h1>
                        </article>
                        <div class="product__content-box__instock">In Stock</div>
                    </section>

                    <div className="product__content-description">
                        <div className="product__content-description-title">
                            <span>ITEM DESCRIPTIONS</span>
                            <p className="product__content-description__p">Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product</p>
                        </div>

                        <div className="box1">
                            <div className="box1__content">
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">ORDERED BY</span>
                                    <p className="product__content-description__info">Mark Saunders</p>
                                </div>
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">REFERENCE NUMBER</span>
                                    <p className="product__content-description__info">JK2020OISFBIO</p>
                                </div>
                            </div>

                            <div className="box1__content">
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">LAST ORDERED</span>
                                    <p className="product__content-description__info">5/24/18</p>
                                </div>
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">LOCATION</span>
                                    <p className="product__content-description__info">Toronto, CAN</p>
                                </div>
                            </div>

                            <div className="product__content-description__items">
                        <span className="product__content-description__titles">QUANTITY</span>
                        <p className="product__content-description__info">120000</p>
                    </div>
                    <div className="product__content-description__items">
                        <span className="product__content-description__titles">CATEGORIES</span>
                        <p className="product__content-description__info">Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales</p>
                    </div>
                        </div>
                    </div>

                    

                <button className="product__content-button" type="button">EDIT</button>

                </main>
            </>
        )
    }
}
export default InventoryProduct