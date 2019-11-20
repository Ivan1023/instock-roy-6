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
                    
                    <tbody className="main__table-body">
                        <div className="main__table-body__group">
                            <tr className="main__table-body__head">
                            <td className="main__table-body__data" data-label="Item">
                                <h3>Product Name Here</h3>Here is a very brief description of the product in the inventory...
                            </td>
                            <td className="main__table-body__data"></td>
                            <td className="main__table-body__data" data-label="Last Ordered">05/24/2018</td>
                            <td className="main__table-body__data" data-label="Location">Toronto, CAN</td>
                            <td className="main__table-body__data" data-label="Quantity">12,000</td>
                            <td className="main__table-body__data" data-label="Status">In Stock</td>
                            <td className="main__table-body__data"><img alt="3 dots" className="main__table-body__data-input"/></td>
                        </tr>
                        <tr  className="main__table-body__dots"></tr>
                        </div>
                    </tbody>
                </table>
            </article >
        )
    }
}
export default InventoryProducts;