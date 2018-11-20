import React, { Component } from 'react'
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees list">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {employee.name}
                                    <a href="#"
                                        onClick={() => this.props.deleteEmployee(employee.id)}
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