import React from 'react';
import Axios from 'axios';
// import './LocationsPage.scss';
import './WareHouseModal.scss'



class WareHouseModal extends React.Component {
    state = {
        name:'',
        address:'',
        location: '',
        contactName:'',
        position: '',
        phoneNumber: '',
        email:'',
        categories:''
    }
    

    changeHandler = (event) => {
            this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    submitHandler = (event) => {
        event.preventDefault();
    
        Axios.post('http://localhost:8080/postlocation',{
            "name":this.state.name,
            "address":this.state.address,
            "location": this.state.location,
            "contactName":this.state.contactName,
            "position": this.state.position,
            "phoneNumber": this.state.phoneNumber,
            "email":this.state.email,
            "categories":this.state.categories
        })
        .then(response => {
            alert("Your Warehouse has been added")
        })
        .catch(error => {
            alert("Something went wrong. We could not add your warehouse")
        })
    }
    
    render() {
        // console.log(this.state)
        return (
            <>
                <h1 className="warehouse-modal__title">Add New</h1>
                <form onSubmit={this.submitHandler} className="warehouse-modal__form">
                    <div className="warehouse-modal__warehouse-container">
                        <h5 className="warehouse-modal__warehouse-label warehouse-modal__label ">WAREHOUSE</h5>
                        <input type='text' onChange={this.changeHandler} value={this.state.name} name="name" placeholder="Name" className="warehouse-modal__warehouse-input"/>
                    </div>
                    <div className="warehouse-modal__double-container">
                        <div className="warehouse-modal__address-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__address-label warehouse-modal__label">ADDRESS</h5>
                            <input onChange={this.changeHandler} value={this.state.address} name="address" placeholder="Enter Address" className="warehouse-modal__address-input warehouse-modal__standard-input"/>
                        </div>
                        <div className="warehouse-modal__location-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__location-label warehouse-modal__label">LOCATION</h5>
                            <select onChange={this.changeHandler} value={this.state.location} name="location" className="warehouse-modal__location-select warehouse-modal__standard-input">   
                                <option>Toronto,CAN</option>
                                <option>Other</option>  
                            </select>     
                        </div>
                    </div>
                    <div className="warehouse-modal__double-container">
                        <div className="warehouse-modal__contact-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__contact-label warehouse-modal__label">CONTACT NAME</h5>
                            <input onChange={this.changeHandler} value={this.state.contactName} name="contactName" placeholder="Enter Name" className="warehouse-modal__name-input warehouse-modal__standard-input"/> 
                        </div>
                        <div className="warehouse-modal__position-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__position-label warehouse-modal__label">POSITION</h5>
                            <input onChange={this.changeHandler} value={this.state.position} name="position"  placeholder="Enter Position" className="warehouse-modal__position-input warehouse-modal__standard-input"/>    
                        </div>
                    </div>
                  
                    <div className="warehouse-modal__double-container">

                        <div className="warehouse-modal__phone-number-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__label">PHONE NUMBER</h5>
                            <input onChange={this.changeHandler} value={this.state.phoneNumber} name="phoneNumber"placeholder="(000)-000-0000" className="warehouse-modal__phone-number-input warehouse-modal__standard-input"/>          
                        </div>                  
                        <div className="warehouse-modal__email-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__email-label warehouse-modal__label ">EMAIL</h5>
                            <input onChange={this.changeHandler} value={this.state.email} name="email" placeholder="email@instock.com" className="warehouse-modal__email-input warehouse-modal__standard-input"/>       
                        </div>
                    </div>  
                    <div className="warehouse-modal__categories-container">
                        <h5 className="warehouse-modal__categories-label warehouse-modal__label">CATEGORIES</h5>
                        <textarea onChange={this.changeHandler} value={this.state.categories} name="categories" className="warehouse-modal__categories-input " placeholder="Use commas to separate each category"></textarea>
                    </div>
                    <div className="warehouse-modal__buttons-container">
                        <button className="warehouse-modal__cancel-button" onClick={this.closeModal}>CANCEL</button>
                        <button className="warehouse-modal__save-button" OnClick={this.closeModal} >SAVE</button>
                    </div>
                    
                </form>
            </>
        )
    }
}
export default WareHouseModal;