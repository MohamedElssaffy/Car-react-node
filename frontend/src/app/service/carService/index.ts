import { ICar } from '../../../typings/car';
import { apolloClient } from '../../graphql';
import { GET_ALL_CARS_QUERY } from './query';

class CarService {
  public async getCars(): Promise<ICar> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS_QUERY })
      .catch((err) => {
        console.error(err);
        throw err;
      });

    return response?.data?.cars;
  }
}

export default new CarService();
