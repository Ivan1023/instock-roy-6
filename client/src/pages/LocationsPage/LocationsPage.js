import React from 'react';

class LocationsPage extends React.Component {
    render(){
        return(
            <section className="main__content">
                <h1 className="main__content-title"> Locations </h1>
                <input className="main__content-searchInput" type="text" name="search" placeholder="Search" />
            </section>
        )
    }
}
export default LocationsPage;