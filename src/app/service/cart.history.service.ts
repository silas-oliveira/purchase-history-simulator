import { CartModel, User } from '../models';

class CartHistoryService {
  static async getByUserId(userId: string) {
    // retornar o historico de compra do usuario pelo id

    // localizar os dados do usuario
    // - nome do usuario
    // - email do usuario
    const {
      email,
      name: { firstname, lastname },
    } = await User.getInfo(userId);
    // - compras do usuário
    const lastPurchases = await CartModel.getAllByUserId(userId);
    // montar um objeto com os dados corretos do usuario
    const result = { 
      nome: `${firstname} ${lastname}`,
      email,
      ultimasCompras: lastPurchases
    };

    return result;
    // retornar o objeto montado
  }
}

export { CartHistoryService };
