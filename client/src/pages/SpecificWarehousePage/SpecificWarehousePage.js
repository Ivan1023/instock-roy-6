import React from 'react';
import './SpecificWarehousePage.scss';
import Axios from 'axios';
import InventoryProducts from '../../components/InventoryProducts/InventoryProducts';

class SpecificWarehousePage extends React.Component {
    url = 'http://localhost:8080';
    state = {
        warehouse: []
    }

    getWarehouse = (id) => {
        if (id) {
            Axios.get(`${this.url}/warehouses/${id}/`)
                .then(response => {
                    this.setState({
                        warehouse: response.data
                    })
                })
        }
    }

    componentDidMount() {
        this.getWarehouse(this.props.match.params.id);
    }
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
                <InventoryProducts products={this.props.products} />
            </>
        )
    }
}
export default SpecificWarehousePage;