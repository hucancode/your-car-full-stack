import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewCarInput } from "./dto/new-car.input";
import { Car } from "./entities/cars";

@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car) private repository: Repository<Car>) {
    }

    public async getAllCars(): Promise<Car[]>{
        const cars = await this.repository.find({}).catch((err) => {
            throw new InternalServerErrorException();
        });
        return cars;
    }

    public async addCar(data: NewCarInput): Promise<Car>
    {
        const car = this.repository.create(data);
        await this.repository.save(car).catch((err) => {
            new InternalServerErrorException();
        })
        console.log("succesfully add a car!");
        return car;
    }
}