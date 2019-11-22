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
            Axios.get(`${this.url}/locationdata/${id}/`)
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
        console.log(this.state);
        if (this.state.warehouse.address && this.state.warehouse.contact) {
            let { name, title, phone, email } = this.state.warehouse.contact;
            let { street, postal, city, province } = this.state.warehouse.address;
            return (
                <>
                    <main className="main__content">
                        <article className="main__content-heading">
                            <div className="main__content-heading__arrow"></div>
                            <h1 className="main__content-heading__title">{this.state.warehouse.name}</h1>
                        </article>
                        <article className="main__content-info">
                            <div className="main__content-info__card">
                                <h4 className="main__content-info__title">ADDRESS</h4>
                                <p className="main__content-info__text">{street}</p>
                                <p className="main__content-info__text">{city}{province}{postal}</p>
                            </div>
                            <div className="main__content-info__card">
                                <h4 className="main__content-info__title">CONTACT</h4>
                                <p className="main__content-info__text">{name}{title}</p>
                                <p className="main__content-info__text">{phone}{email}</p>
                            </div>
                        </article>
                    </main>
                    <InventoryProducts products={this.props.products} />
                </>
            )
        }
        else
            return ("There is no warehouse with this name");
    }
}
export default SpecificWarehousePage;