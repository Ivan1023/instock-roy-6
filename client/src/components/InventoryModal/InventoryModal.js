import React from 'react';
import Switch from '../ModalSwitch/Switch';
import Axios from 'axios';
import '../InventoryModal/styles.scss';

class InventoryModal extends React.Component {
  state = {
    name: '',
    description: '',
    quantity: '',
    lastOrdered: '',
    location: '',
    isInstock: '',
    categories: '',
    value: false
  }

  changeHandler = (event) => {
    if (event.target.value !== '') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    let stockStatus = this.state.isInstock;
    stockStatus ? stockStatus = "In Stock" : stockStatus = "Out of stock"

    let newProduct = {
      "name": this.state.name,
      "description": this.state.description,
      "quantity": this.state.quantity,
      "lastOrdered": this.state.lastOrdered,
      "location": this.state.location,
      "isInstock": stockStatus,
      "categories": this.state.categories
    }
    Axios.post('http://localhost:8080/inventory', newProduct)
      .then(response => {
        if (response.data !== '') alert("Your Product has been added")
        else alert('Please fill the entire form!')
      })
      .catch(error => {
        alert("Something went wrong. We could not add your warehouse")
      })
  }


  render() {
    return (
      <>
        <h2 className="modal__header" ref={subtitle => this.subtitle = subtitle}>Create New</h2>
        <form onSubmit={this.submitHandler}>
          <div className="modal__tablet">
            <div className="modal__textbox-tablet">
              <h4 className="modal__label">Product</h4>
              <textarea type="text" onChange={this.changeHandler} value={this.state.name} className="modal__textbox" name="name" placeholder="Item name"></textarea>
            </div>
            <div>
              <h4 className="modal__label">Last Ordered</h4>
              <textarea onChange={this.changeHandler} className="modal__textbox" value={this.state.lastOrdered} name="lastOrdered" placeholder="yyyy-mm-dd"></textarea>
            </div>
          </div>
          <div className="modal__tablet">
            <div className="modal__textbox-tablet">
              <h4 className="modal__label">City</h4>
              <textarea onChange={this.changeHandler} className="modal__textbox" value={this.state.location} name="location" placeholder="City"></textarea>
            </div>
            <div>
              <h4 className="modal__label">Country</h4>
              <select onChange={this.changeHandler} value={this.state.location} name="location" className="modal__textbox modal__textbox--option">
                <option>Canada</option>
                <option>US</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="modal__tablet">
            <div className="modal__textbox-tablet">
              <h4 className="modal__label">Quantity</h4>
              <textarea onChange={this.changeHandler} className="modal__textbox" value={this.state.quantity} name="quantity" placeholder="0"></textarea>
            </div>
            <div>
              <h4 className="modal__label">Status</h4>
              <Switch isOn={this.state.value} handleToggle={() => this.setState({ value: !this.state.value })} />
            </div>
          </div>
          <div className="modal__tablet--description">
            <h4 className="modal__label">Item Description</h4>
            <textarea onChange={this.changeHandler} className="modal__textbox modal__textbox--description" value={this.state.description} name="description" placeholder="(Optional)"></textarea>
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