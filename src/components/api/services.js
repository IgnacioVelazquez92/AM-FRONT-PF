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

  async login(FormData) {
    return this.client.post(`/login`, FormData);
  }

  async editUser(FormData) {
    return this.client.patch(`/edit-user/:id`, FormData);
  }

  async recoverPass(userData) {
    return this.client.patch(`user/recover-pass`, userData);
  }
}
