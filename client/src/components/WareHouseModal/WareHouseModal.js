import React from 'react';
// import './LocationsPage.scss';



class WareHouseModal extends React.Component {
    render() {
        return (
            <>
                <h1 className="warehouse-modal__title">Add New</h1>
                <form>
                    <h5 className="warehouse-modal__warehouse-label">WAREHOUSE</h5>
                    <input defaultValue="Name & ID" className="warehouse-modal__warehouse-input"/>
                    <h5 className="warehouse-modal__address-label">ADDRESS</h5>
                    <input defaultValue="Enter Address" className="warehouse-modal__address-input"/>
                    <h5 className="warehouse-modal__location-label">LOCATION</h5>
                    <select className="warehouse-modal__location-select">   
                        <option>Toronto,CAN</option>
                        <option>Other</option>  
                    </select>                           
                    <h5 className="warehouse-modal__contact-label">CONTACT NAME</h5>
                    <input defaultValue="Enter Name" className="warehouse-modal__name-input"/>                            
                    <h5 className="warehouse-modal">POSITION</h5>
                    <input defaultValue="Enter Postion" className="warehouse-modal__position-input"/>                            
                    <h5 className="warehouse-modal">PHONE NUMBER</h5>
                    <input defaultValue="(000)-000-0000" className="warehouse-modal__phone-number-input"/>                            
                    <h5 className="warehouse-modal">EMAIL</h5>
                    <input defaultValue="email@instock.com" className="warehouse-modal__email-input"/>                            
                    <h5 className="warehouse-modal">CATEGORIES</h5>
                    <textarea className="warehouse-modal__categories-input" defaultValue="Use commas to separate each category"></textarea>
                    <button onClick={this.closeModal}>CANCEL</button>
                    <button>SAVE</button>
                </form>
            </>
        )
    }
}
export default WareHouseModal;