import React from 'react';
import './LocationsPage.scss';
import WareHouse from '../../components/WareHouse/WareHouse';
import Modal from 'react-modal';
import WareHouseModal from '../../components/WareHouseModal/WareHouseModal'

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

//   Modal.setAppElement('LocationsPage')

class LocationsPage extends React.Component {

    state={
        modalIsOpen:false
    }

    openModal=()=> {
        console.log("you clicked the open modal")
        this.setState({modalIsOpen: true});
      }
     

      closeModal=()=>{
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
                    
                    <button onClick={this.openModal}>ModalTest</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        // subtitle={this.subtitle}
                        >
                        
                        <WareHouseModal/>
                    </Modal>
                </main>
            </>
        )
    }
}
export default LocationsPage;