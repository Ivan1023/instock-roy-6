import React from 'react';
import Switch from '../ModalSwitch/Switch'


class InventoryModal extends React.Component {

    render() {
        return (
          <>
          <button onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Create New</h2>
          <form>
              <label>Product</label>
              <textarea placeholder="Item name"></textarea>
              <label>Last Ordered</label>
              <textarea placeholder="yyyy-mm-dd"></textarea>
              <label>City</label>
              <textarea placeholder="City"></textarea>
              <label>Country</label>
              <select>
                  <option>Canada</option>
                  <option>US</option>
                  <option>Other</option>
              </select>
              <label>Quantity</label>
              <textarea placeholder="0"></textarea>
              <Switch/>
              <label>Item Description</label>
              <textarea placeholder="(Optional)"></textarea>
          </form>
          </>
        )
    }
}

export default InventoryModal