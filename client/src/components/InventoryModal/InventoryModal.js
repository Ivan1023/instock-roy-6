import React from 'react';
import Switch from '../ModalSwitch/Switch';
import '../InventoryModal/styles.scss';


class InventoryModal extends React.Component {

    render() {
        return (
          <>
            <h2 className="modal__header" ref={subtitle => this.subtitle = subtitle}>Create New</h2>
            <form>
              <div className="modal__tablet">
                  <div className="modal__textbox-tablet">
                    <h4 className="modal__label">Product</h4>
                    <textarea className="modal__textbox" placeholder="Item name"></textarea>
                  </div>
                  <div>
                    <h4 className="modal__label">Last Ordered</h4>
                    <textarea className="modal__textbox" placeholder="yyyy-mm-dd"></textarea>
                  </div>
              </div>
              <div className="modal__tablet">
                  <div className="modal__textbox-tablet">
                    <h4 className="modal__label">City</h4>
                    <textarea className="modal__textbox" placeholder="City"></textarea>
                  </div>
                  <div>
                    <h4 className="modal__label">Country</h4>
                    <select className="modal__textbox modal__textbox--option">
                        <option>Canada</option>
                        <option>US</option>
                        <option>Other</option>
                    </select>
                  </div>
              </div>
              <div className="modal__tablet">
                <div className="modal__textbox-tablet">
                  <h4 className="modal__label">Quantity</h4>
                  <textarea className="modal__textbox" placeholder="0"></textarea>
                </div>
                <div>
                  <h4 className="modal__label">Status</h4>
                  <Switch/>
                </div>
              </div>
              <div className="modal__tablet--description">
                <h4 className="modal__label">Item Description</h4>
                <textarea className="modal__textbox modal__textbox--description" placeholder="(Optional)"></textarea>
              </div>
              <div className="modal__tablet modal__tablet--desktop">
                <button className="modal__button--save">Save</button>
                <button className="modal__button--cancel" onClick={this.closeModal}>Cancel</button>
              </div>
            </form>
          </>
        )
    }
}

export default InventoryModal