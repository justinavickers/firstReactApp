import React, { Component } from 'react'
import "./owner.css"
export default class OwnersList  extends Component {
    render() {
        return (
            <section className="owners list">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {owner.name}
                                    <a href="#"
                                        onClick={() => this.props.deleteOwner(owner.id)}
                                        className="card-link">Delete</a>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}