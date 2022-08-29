import { CartModel, User } from '../models';

class CartHistoryService {
  static async getByUserId(userId: string) {
    const {
      email,
      name: { firstname, lastname },
    } = await User.getInfo(userId);
    const lastPurchases = await CartModel.getAllByUserId(userId);
    const result = { 
      nome: `${firstname} ${lastname}`,
      email,
      ultimasCompras: lastPurchases
    };
    return result;
  }
}

export { CartHistoryService };
