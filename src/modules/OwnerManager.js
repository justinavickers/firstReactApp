import APIManager from "./APIManager"
class OwnerManager extends APIManager {
  getOwner(id) {
    return this.get(id)
  }

  getAll() {
    console.log(this.all)
    return this.all()
  }

  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }

  post(newOwner) {
    return fetch(`${"http://localhost:5002"}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  }

}

export default new OwnerManager("owners")