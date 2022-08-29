import QueryString from 'qs';
import { CartsService } from '../service';

class CartsController {
  static async list(query: QueryString.ParsedQs) {
    const result = await CartsService.list(query);
    return result;
  }
}

export { CartsController };
  
