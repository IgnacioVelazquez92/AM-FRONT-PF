import axios from "axios";

export class ApiClient {
  client;
  constructor() {
    this.client = axios.create({ baseURL: "http://localhost:8080" });
  }

  async getAllUsers() {
    return this.client.get("/user");
  }

  async createUser(FormData) {
    return this.client.post(`/user/create-user`, FormData);
  }
}
