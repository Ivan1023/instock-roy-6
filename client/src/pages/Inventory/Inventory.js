import React from 'react';
import './Inventory.scss';
import InventoryCard from '../../components/Inventory-Card/InventoryCard';

class Inventory extends React.Component {
    render() {
        return (
            <>
                <main>
                    <section className="main__content">
                        <article className="main__content-header">
                            <h1 className="main__content-header__title">Inventory</h1>
                            <input className="main__content-header__searchInput" type="text" name="search" placeholder="Search" />
                        </article>
                        <InventoryCard />
                    </section>
                </main>
            </>
        )
    }
}
export default Inventory;