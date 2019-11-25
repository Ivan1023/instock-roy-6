import React from 'react';
import './ProductPage.scss';
import { Link } from 'react-router-dom';

class ProductPage extends React.Component {

    render() {

        const findItem = this.props.products.find(item => {
            return item.id === this.props.match.params.id
        })
        console.log(findItem);
            
        return (
<>
            {findItem ? 
            <>
                <main>
                    <section className="product__content">
                        <article className="product__content-box">
                        <Link to="/"><div className="product__content-icon"></div></Link>
        <h1 className="product__content-box__title">{findItem.name}</h1>
                        </article>
                        <div className="product__content-box__instock">{findItem.isInstock ? 'Instock' : 'Out of Stock'}</div>
                    </section>

                    <div className="product__content-description">
                        <div className="product__content-description-title">
                            <span>ITEM DESCRIPTIONS</span>
                            <p className="product__content-description__p">{findItem.description}</p>
                        </div>

                        <div className="box1">
                            <div className="box1__content">
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">ORDERED BY</span>
        <p className="product__content-description__info">{findItem.id}</p>
                                </div>
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">REFERENCE NUMBER</span>
                                    <p className="product__content-description__info">{findItem.warehouseId}</p>
                                </div>
                            </div>

                            <div className="box1__content">
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">LAST ORDERED</span>
                                    <p className="product__content-description__info">{findItem.lastOrdered}</p>
                                </div>
                                <div className="product__content-description__items">
                                    <span className="product__content-description__titles">LOCATION</span>
                                    <p className="product__content-description__info">{findItem.location}</p>
                                </div>
                            </div>

                            <div className="product__content-description__items">
                        <span className="product__content-description__titles">QUANTITY</span>
                        <p className="product__content-description__info">{findItem.quantity}</p>
                    </div>
                    <div className="product__content-description__items">
                        <span className="product__content-description__titles">CATEGORIES</span>
                        <p className="product__content-description__info">{findItem.categories}</p>
                    </div>
                        </div>
                    </div>

                <button className="product__content-button" type="button">EDIT</button>

                </main>
            </> : null}
            </>
        )
    }
}
export default ProductPage