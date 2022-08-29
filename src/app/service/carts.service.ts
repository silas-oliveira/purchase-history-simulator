import QueryString from 'qs';
import { UserSequelize } from '../../db';

class CartsService {
  static async list(query: QueryString.ParsedQs) {
    const test = await UserSequelize.findAll({ raw: true });
    console.log('query', query);
    console.log('test', test);
    return test;
  }
}

export { CartsService };
