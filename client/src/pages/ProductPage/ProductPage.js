import React from 'react';
import './ProductPage.scss';
import { Link } from 'react-router-dom';

class ProductPage extends React.Component {

    render() {
        const findItem = this.props.products.find(item => {
            return item.id === this.props.match.params.id
        })
        return (
            <>
                {findItem ?
                    <>
                        <main className="main__product">
                            <section className="main__product-content">
                                <article className="main__product-content-box">
                                    <Link to="/"><div className="main__product-content-icon"></div></Link>
                                    <h1 className="main__product-content-box__title">{findItem.name}</h1>
                                </article>
                                <div className="main__product-content-box__instock"><button className="main__product-content-box__instockButton">{findItem.isInstock ? 'Instock' : 'Out of Stock'}</button></div>
                            </section>

                            <div className="main__product-content-description">
                                <div className="main__product-content-description-title">
                                    <span>ITEM DESCRIPTIONS</span>
                                    <p className="main__product-content-description__p">{findItem.description}</p>
                                </div>

                                <div className="box1">
                                    <div className="box1__content">
                                        <div className="main__product-content-description__items">
                                            <span className="main__product-content-description__titles">ORDERED BY</span>
                                            <p className="main__product-content-description__info">{findItem.id}</p>
                                        </div>
                                        <div className="main__product-content-description__items">
                                            <span className="main__product-content-description__titles">REFERENCE NUMBER</span>
                                            <p className="main__product-content-description__info">{findItem.warehouseId}</p>
                                        </div>
                                    </div>

                                    <div className="box1__content">
                                        <div className="main__product-content-description__items">
                                            <span className="main__product-content-description__titles">LAST ORDERED</span>
                                            <p className="main__product-content-description__info">{findItem.lastOrdered}</p>
                                        </div>
                                        <div className="main__product-content-description__items">
                                            <span className="main__product-content-description__titles">LOCATION</span>
                                            <p className="main__product-content-description__info">{findItem.location}</p>
                                        </div>
                                    </div>

                                    <div className="main__product-content-description__items">
                                        <span className="main__product-content-description__titles">QUANTITY</span>
                                        <p className="main__product-content-description__info">{findItem.quantity}</p>
                                    </div>
                                    <div className="main__product-content-description__items">
                                        <span className="main__product-content-description__titles">CATEGORIES</span>
                                        <p className="main__product-content-description__info">{findItem.categories}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="main__product-content-buttondiv"> <button className="main__product-content-button" type="button">EDIT</button> </div>

                        </main>
                    </> : null}
            </>
        )
    }
}
export default ProductPage