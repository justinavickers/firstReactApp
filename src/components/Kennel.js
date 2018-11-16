import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./locationList/LocationList"
import AnimalList from "./animal/AnimalList"
import OwnersList from "./OwnersList/ownersList"

export default class Kennel extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]


// This will eventually get pulled from the API
locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
]

animalsFromAPI = [
    {id: 1, name: "Castor"},
    {id: 2, name: "Sawyer"},
    {id: 3, name: "Isabelle"},
    {id: 4, name: "Zoe"},
    {id: 5, name: "Athena"},
    {id: 6, name: "Lester"}
]
ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
]

petOwnersFromAPI=[
    {id: 1, ownerID: 1, petID: 1},
    {id: 2, ownerID: 2, petID: 1},
    {id: 3, ownerID: 3, petID: 2},
    {id: 4, ownerID: 4, petID: 3},
    {id: 5, ownerID: 5, petID: 4},
    {id: 6, ownerID: 6, petID: 5}

]
state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    petOwners: this.petOwnersFromAPI
}

  render() {
      return (
          <div>
              <h3>Student Kennels</h3>
              <h4>Nashville North Location</h4>
              <h5>500 Puppy Way</h5>
              <EmployeeList employees={this.state.employees}  />
              <LocationList locations={this.state.locations} />
              <AnimalList animals={this.state.animals}  owners={this.state.owners}
              petOwners={this.state.petOwners} />

          </div>
      );
  }
}