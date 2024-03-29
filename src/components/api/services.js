import axios from "axios";

const token = localStorage.getItem("token");

export class ApiClient {
  client;
  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BACKEND,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "access-token": token,
      },
    });
  }

  async getAllUsers() {
    return this.client.get("/user/get-all-user");
  }

  async getUsersName(name) {
    return this.client.get(`/user/get-by-name/${name}`);
  }

  async getProductName(nombre) {
    return this.client.get(`/products/get-by-product/${nombre}`);
  }

  async createUser(FormData) {
    return this.client.post(`/user/create-user`, FormData);
  }

  async login(FormData) {
    return this.client.post(`/login`, FormData);
  }

  async editUser(FormData) {
    return this.client.patch(`user/edit-user/${FormData.id}`, FormData);
  }

  async editUserMail(FormData) {
    return this.client.patch(`user/edit-mail-user/${FormData.id}`, FormData);
  }

  async recoverPass(userData) {
    return this.client.patch(`user/recover-pass`, userData);
  }

  async deleteUser(id) {
    return this.client.delete(`user/delete-user/${id}`);
  }

  async disabledUser(id, isAdmin) {
    return this.client.patch(`user/disable-user/${id}/${isAdmin}`);
  }

  async isAministrator(id, disabled) {
    return this.client.patch(`user/isAdmin-user/${id}/${disabled}`);
  }

  async getAllProducts() {
    return this.client.get(`products/get-all-products`);
  }
}
