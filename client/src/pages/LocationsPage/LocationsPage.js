import React from 'react';
import './LocationsPage.scss'

class LocationsPage extends React.Component {
    render() {
        return (
            <section className="main__content">
                <div className="main__content-header">
                    <h1 className="main__content-header__title"> Locations </h1>
                    <input className="main__content-header__searchInput" type="text" name="search" placeholder="Search" />
                </div>
            </section>
        )
    }
}
export default LocationsPage;