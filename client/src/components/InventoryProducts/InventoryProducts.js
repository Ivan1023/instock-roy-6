import React from 'react';
import './InventoryProducts.scss';
import RemoveButton from '../RemoveButton/RemoveButton'

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
                    <tbody className="main__table-body">
                        {this.props.products.map((item) => {
                            return (
                                <tr className="main__table-body__head" key={item.id}>
                                    <td className="main__table-body__data">
                                        <div className="main__table-body__container">
                                            <p className="main__table-body__data-item">Item</p>
                                            <div className="main__table-body__container"><RemoveButton getInventory={this.props.getInventory} id={item.id}/></div>
                                        </div>
                                        <h3 className="main__table-body__data-firstTitle">{item.name}</h3>{item.description}
                                    </td>
                                    <td className="main__table-body__data" data-label="Last Ordered">{item.lastOrdered}</td>
                                    <td className="main__table-body__data" data-label="Location">{item.location}</td>
                                    <td className="main__table-body__data" data-label="Quantity">{item.quantity}</td>
                                    <td className="main__table-body__data" data-label="Status">{item.isInstock ? "In Stock" : "Out of Stock"}</td>
                                    <td className="main__table-body__data">
                                        <div className="main__table-body__container__tablet">
                                            <RemoveButton getInventory={this.props.getInventory} id={item.id}/>
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