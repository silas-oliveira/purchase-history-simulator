import QueryString from 'qs';
import { throwInvalidOrUndefinedId } from '../../utils/throwError/throw.error';
import { CartHistoryService } from '../service';

class CartController {
  static async get(query: QueryString.ParsedQs) {
    const { id } = query;
    if (typeof id !== 'string' || Number.isNaN(Number(id))) return throwInvalidOrUndefinedId();
    const result = await CartHistoryService.getByUserId(id);
    return result;
  }
}

export { CartController };
  
