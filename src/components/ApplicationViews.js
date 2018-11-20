import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './locationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from "./OwnersList/OwnersList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"

export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    petOwners: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll().then(allAnimals => {
      this.setState({
        animals: allAnimals
      })
    })
    EmployeeManager.getAll().then(allEmployees => {
      this.setState({
        employees: allEmployees
      })
    })
    LocationManager.getAll().then(allLocations => {
      this.setState({
        locations: allLocations
      })
    })
    OwnerManager.getAll().then(allOwners => {
      this.setState({
        owners: allOwners
      })
    })
    .then(() => this.setState(newState))
  }


  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  deleteEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(e => e.json())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/owners`))
      .then(e => e.json())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return (
            <AnimalList
              animals={this.state.animals}
              owners={this.state.owners}
              petOwners={this.state.petOwners}
              deleteAnimal={this.deleteAnimal} />
          )
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList
            employees={this.state.employees}
            deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList
            owners={this.state.owners}
            deleteOwner={this.deleteOwner} />
        }} />
      </React.Fragment>
    )
  }
}

