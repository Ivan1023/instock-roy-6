import React from 'react';
import './LocationsPage.scss';
import WareHouse from '../../components/WareHouse/WareHouse';
import Modal from 'react-modal';
import  '../../components/WareHouseModal/WareHouseModal.scss'
import WareHouseModal from '../../components/WareHouseModal/WareHouseModal'

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




class LocationsPage extends React.Component {
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
                        className="content"
                        overlayClassName="overlay"
                        >
                        <WareHouseModal/>
                    </Modal>
                </main>
            </>
        )
    }
}
export default LocationsPage;