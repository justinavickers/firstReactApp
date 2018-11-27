const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }
  get(id) {
    return fetch(`${remoteURL}/${this.resource}/${id}`).then(e => e.json())
  }
  all() {
    return fetch(`${remoteURL}/${this.resource}`).then(e => e.json())
  }
  delete(id) {
    return fetch(`${remoteURL}/${this.resource}/${id}`, { method: "DELETE" })
      .then(e => e.json())
  }
}