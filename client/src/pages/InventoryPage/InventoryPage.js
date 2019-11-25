import React from 'react';
import Modal from 'react-modal';
import '../../pages/LocationsPage/LocationsPage.scss';
import '../../style/modal.scss';
import InventoryModal from '../../components/InventoryModal/InventoryModal';
import InventoryProducts from '../../components/InventoryProducts/InventoryProducts';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '75%'
    }
};

class InventoryPage extends React.Component {
    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getInventory();
        }
    }

    render() {
        return (
            <>
                <main>
                    <section className="main__content">
                        <article className="main__content-header">
                            <h1 className="main__content-header__title">Inventory</h1>
                            <input className="main__content-header__searchInput" type="text" name="search" placeholder="Search" />
                        </article>
                    </section>
                    <InventoryProducts products={this.props.products} remove={this.props.remove} />
                    <div className="modal">
                        <button onClick={this.openModal} className="modal__button"><div className="modal__img">|</div></button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <InventoryModal />
                        </Modal>
                    </div>
                </main>
            </>
        )
    }
}

export default InventoryPage