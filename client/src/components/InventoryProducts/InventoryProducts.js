import React from 'react';
import './InventoryProducts.scss';

class InventoryProducts extends React.Component {
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
                    {this.props.products.map((item) => {
                        return(
                            <tbody className="main__table-body" key={item.id}>
                            <tr className="main__table-body__head">
                                <td className="main__table-body__data">
                                    <p className="main__table-body__data-item">Item</p>
                        <h3 className="main__table-body__data-firstTitle">{item.name}</h3>{item.description}
                                </td>
                                <td className="main__table-body__data" data-label="Last Ordered">{item.lastOrdered}</td>
                                <td className="main__table-body__data" data-label="Location">{item.location}</td>
                                <td className="main__table-body__data" data-label="Quantity">{item.quantity}</td>
                                <td className="main__table-body__data" data-label="Status">{item.isInstock ? "In Stock" : "Out of Stock"}</td>
                                <td className="main__table-body__data"><img alt="3 dots" className="main__table-body__data-input"/></td>
                            </tr>
                        </tbody>
                        );
                    })}
                </table>
            </article >
        )
    }
}
export default InventoryProducts;