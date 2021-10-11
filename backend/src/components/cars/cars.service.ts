import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/Car';
import { CarData } from './types/new-car-data';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return this.carRepository.find({}).catch(() => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(carData: CarData): Promise<Car> {
    const newCar = this.carRepository.create(carData);
    return this.carRepository.save(newCar).catch(() => {
      throw new InternalServerErrorException();
    });
  }
}
