import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './locationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from "./OwnersList/OwnersList"
import AnimalManager from "../modules/AnimalManager"
import AnimalForm from "./animal/AnimalForm"
import AnimalDetail from './animal/AnimalDetail'
import OwnerForm from "./OwnersList/ownerForm"
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

      .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
        .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => fetch("http://localhost:5002/petOwners")
        .then(r => r.json()))
      .then(petOwners => newState.petOwners = petOwners)
      .then(() => this.setState(newState))

  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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

  addAnimal = (animal) => AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
      animals: animals
    })
    )


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

  addOwner = (owner) => OwnerManager.post(owner)
    .then(() => OwnerManager.getAll())
    .then(owners => this.setState({
      owners: owners
    })
    )

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return (
            <AnimalList
              {...props}
              animals={this.state.animals}
              owners={this.state.owners}
              petOwners={this.state.petOwners}
              deleteAnimal={this.deleteAnimal} />
          )
        }} />

        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal}
            animals={this.state.animals} />
        }} />

        <Route path="/employees" render={(props) => {
          return <EmployeeList
            employees={this.state.employees}
            deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList {...props}
            owners={this.state.owners}
            deleteOwner={this.deleteOwner} />
        }} />
         <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}
            owners={this.state.owners}
            addOwner={this.addOwner}
           />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />
        }} />
      </React.Fragment>
    )
  }
}

