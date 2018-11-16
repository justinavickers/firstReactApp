import React, { Component } from 'react'

export default class AnimalList  extends Component {
  render() {
      return (
        <section className="animals">
        {/* {
            this.props.animals.map(animal =>
                <div key={animal.id}>
                    {animal.name}
                </div>
            )
        }, */}
         {
            this.props.petOwners.map((petOwner) => {
              let owner = this.props.owners.find(owner => owner.id === petOwner.ownerID)
              let pets = this.props.animals.find(pet => pet.id === petOwner.petID)

              return(
                <div key={petOwner.id}>
                  <p>{owner.name}</p>
                  <p>{pets.name}</p>
                </div>

              )
            }
                // <div key={petOwner.id}>
                //     {animal.name}
                // </div>
            )
        }
        </section>
      );
  }
}