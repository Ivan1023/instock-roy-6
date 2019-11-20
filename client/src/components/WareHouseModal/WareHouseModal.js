import React from 'react';
// import './LocationsPage.scss';
import './WareHouseModal.scss'



class WareHouseModal extends React.Component {
    render() {
        return (
            <>
                <h1 className="warehouse-modal__title">Add New</h1>
                <form className="warehouse-modal__form">
                    <div className="warehouse-modal__warehouse-container">
                        <h5 className="warehouse-modal__warehouse-label warehouse-modal__label ">WAREHOUSE</h5>
                        <input defaultValue="Name & ID" className="warehouse-modal__warehouse-input"/>
                    </div>
                    <div className="warehouse-modal__double-container">
                        <div className="warehouse-modal__address-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__address-label warehouse-modal__label">ADDRESS</h5>
                            <input defaultValue="Enter Address" className="warehouse-modal__address-input warehouse-modal__standard-input"/>
                        </div>
                        <div className="warehouse-modal__location-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__location-label warehouse-modal__label">LOCATION</h5>
                            <select className="warehouse-modal__location-select warehouse-modal__standard-input">   
                                <option>Toronto,CAN</option>
                                <option>Other</option>  
                            </select>     
                        </div>
                    </div>
                    <div className="warehouse-modal__double-container">
                        <div className="warehouse-modal__contact-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__contact-label warehouse-modal__label">CONTACT NAME</h5>
                            <input defaultValue="Enter Name" className="warehouse-modal__name-input warehouse-modal__standard-input"/> 
                        </div>
                        <div className="warehouse-modal__position-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__position-label warehouse-modal__label">POSITION</h5>
                            <input defaultValue="Enter Postion" className="warehouse-modal__position-input warehouse-modal__standard-input"/>    
                        </div>
                    </div>
                  
                    <div className="warehouse-modal__double-container">

                        <div className="warehouse-modal__phone-number-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__label">PHONE NUMBER</h5>
                            <input defaultValue="(000)-000-0000" className="warehouse-modal__phone-number-input warehouse-modal__standard-input"/>          
                        </div>                  
                        <div className="warehouse-modal__email-container warehouse-modal__standard-container">
                            <h5 className="warehouse-modal__email-label warehouse-modal__label ">EMAIL</h5>
                            <input defaultValue="email@instock.com" className="warehouse-modal__email-input warehouse-modal__standard-input"/>       
                        </div>
                    </div>  
                    <div className="warehouse-modal__categoies-container">
                        <h5 className="warehouse-modal__categories-label warehouse-modal__label">CATEGORIES</h5>
                        <textarea className="warehouse-modal__categories-input  warehouse-modal__standard-input" defaultValue="Use commas to separate each category"></textarea>
                    </div>
                    <div className="warehouse-modal__buttons-container">
                        <button className="warehouse-modal__cancel-button" onClick={this.closeModal}>CANCEL</button>
                        <button className="warehouse-modal__save-button">SAVE</button>
                    </div>
                    
                </form>
            </>
        )
    }
}
export default WareHouseModal;