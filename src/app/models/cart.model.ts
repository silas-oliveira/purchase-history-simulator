import axios from 'axios';

class CartModel {
  static async getAll() {
    const { data } = await axios.get('https://fakestoreapi.com/carts');
    return data;
  }

  static async getById(id: string) {
    const { data } = await axios.get(`https://fakestoreapi.com/carts/${id}`);
    return data;
  }

  static async getAllByUserId(userId: string) {
    const { data } = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
    return data;
  }
}

export { CartModel };

