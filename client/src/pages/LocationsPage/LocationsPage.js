import React from 'react';
import './LocationsPage.scss';
import WareHouse from '../../components/WareHouse/WareHouse';
import Nav from '../../components/Nav/Nav';

class LocationsPage extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <main>
                    <section className="main__content">
                        <article className="main__content-header">
                            <h1 className="main__content-header__title"> Locations </h1>
                            <input className="main__content-header__searchInput" type="text" name="search" placeholder="Search" />
                        </article>
                        <WareHouse />
                    </section>
                </main>
            </>
        )
    }
}
export default LocationsPage;