import React from 'react';
import './InventoryProducts.scss';
// import { Link } from 'react-router-dom';

class InventoryProducts extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };

    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }


    render() {


        return (
            < article className="main" >
                <table className="main__table">
                    <thead className="main__table-titles">
                        <tr className="main__table-titles-row">
                            <th>item</th>
                            <th>last ordered</th>
                            <th>location</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="main__table-body">
                        {this.props.products.map((item) => {
                            return (
                                <tr className="main__table-body__head" key={item.id}>
                                    <td className="main__table-body__data">
                                        <p className="main__table-body__data-item">Item</p>
                                        <h3 className="main__table-body__data-firstTitle">{item.name}</h3>{item.description}
                                    </td>
                                    <td className="main__table-body__data" data-label="Last Ordered">{item.lastOrdered}</td>
                                    <td className="main__table-body__data" data-label="Location">{item.location}</td>
                                    <td className="main__table-body__data" data-label="Quantity">{item.quantity}</td>
                                    <td className="main__table-body__data" data-label="Status">{item.isInstock ? "In Stock" : "Out of Stock"}</td>
                                    <td className="main__table-body__data">
                                        <div className="dropdown" ref={this.container}>
                                            <img onClick={this.handleButtonClick} alt="3 dots" className="main__table-body__data-input" />
                                            {this.state.open && (<button className="dropdown__position">Remove</button>)}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </article >
        )
    }
}
export default InventoryProducts;