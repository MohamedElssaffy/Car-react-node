import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/Car';
import { CarData } from './types/new-car-data';

@Resolver()
export class CarsResolver {
  constructor(private carService: CarsService) {}

  @Query(() => [Car])
  public async cars() {
    return this.carService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Car)
  public async addCar(@Args('carData') carData: CarData) {
    return this.carService.addCar(carData).catch((err) => {
      throw err;
    });
  }
}
