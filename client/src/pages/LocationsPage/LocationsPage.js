import React from 'react';
import './LocationsPage.scss';
import WareHouse from '../../components/WareHouse/WareHouse';

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
                </main>
            </>
        )
    }
}
export default LocationsPage;