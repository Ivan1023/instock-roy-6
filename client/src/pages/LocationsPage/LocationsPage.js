import React from 'react';
import './LocationsPage.scss';
import WareHouse from '../../components/WareHouse/WareHouse';
import Nav from '../../components/Nav/Nav';
import Modal from 'react-modal';
import InventoryModal from '../../components/InventoryModal/InventoryModal'



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class LocationsPage extends React.Component {
    state = {
        modalIsOpen: false
    }

    openModal = ()=>{
        this.setState({modalIsOpen: true})
    }
    
    closeModal = ()=> {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <>
                <main>
                    <section className="main__content">
                        <article className="main__content-header">
                            <h1 className="main__content-header__title"> Locations </h1>
                            <input className="main__content-header__searchInput" type="text" name="search" placeholder="Search" />
                        </article>
                        <WareHouse />
                    </section>
                    <div>
                        <button onClick={this.openModal}>Open Modal</button>
                        <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                        <InventoryModal/>
                        </Modal>
                    </div>
                </main>
            </>
        )
    }
}
export default LocationsPage;