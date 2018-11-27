import React, { Component } from 'react'
import "./location.css"
export default class LocationList extends Component {
    render() {
        return (
            <section className="locations list">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                        </div>
                    )
                }
            </section>
        );
    }
}