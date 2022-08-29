import axios from 'axios';

class ProductModel {
  static async getById(id: string) {
    // informações dos produtos comprados
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // const { data } = await axios.get('https://fakestoreapi.com/products/3');
    
    return data;
  }

}



export { ProductModel };

