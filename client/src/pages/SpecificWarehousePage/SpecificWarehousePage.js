import React from 'react';
import './SpecificWarehousePage.scss';
import InventoryProducts from '../../components/InventoryProducts/InventoryProducts';

class SpecificWarehousePage extends React.Component {
    render() {
        return (
            <>
                <main className="main__content">
                    <article className="main__content-heading">
                        <div className="main__content-heading__arrow"></div>
                        <h1 className="main__content-heading__title"> Warehouse Name </h1>
                    </article>
                    <article className="main__content-info">
                        <div className="main__content-info__card">
                            <h4 className="main__content-info__title">ADDRESS</h4>
                            <p className="main__content-info__text">123 Main Street W. Suite 201</p>
                            <p className="main__content-info__text">Toronto, ON M65GB7 CA</p>
                        </div>
                        <div className="main__content-info__card">
                            <h4 className="main__content-info__title">CONTACT</h4>
                            <p className="main__content-info__text">Mara Weinberg Warehouse Manager</p>
                            <p className="main__content-info__text">+1 416 678 2345 weinberg@instock.com</p>
                        </div>
                    </article>
                </main>
                <InventoryProducts />
            </>
        )
    }
}
export default SpecificWarehousePage;