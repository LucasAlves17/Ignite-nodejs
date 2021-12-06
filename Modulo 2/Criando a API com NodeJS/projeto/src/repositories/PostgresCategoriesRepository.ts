import { Category } from '../model/Category';
import {
  ICategoriesReposiroty,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesReposiroty {
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.');
  }
}

export { PostgresCategoriesRepository };
