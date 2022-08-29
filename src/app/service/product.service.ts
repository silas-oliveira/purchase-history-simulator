import { ProductModel } from '../models';

class ProductService {
  static async getById(id: string) {
    const products = ProductModel.getById(id);
  }
}

export { ProductService };
