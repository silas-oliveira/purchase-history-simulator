import axios from 'axios';

class User {
  static async getInfo(id: string) {
    const { data } = await axios.get(`https://fakestoreapi.com/users/${id}`);
    return data;
  }
}

export { User };
