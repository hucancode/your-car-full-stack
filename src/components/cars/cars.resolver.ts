import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { NewCarInput } from "./dto/new-car.input";
import { Car } from "./entities/cars";

@Resolver()
export class CarsResolver {
    constructor(private service: CarsService) {
    }

    @Query((returns) => [Car])
    public async cars(): Promise<Car[]> {
        return await this.service.getAllCars().catch((err) => {
            throw err;
        });
    }

    @Mutation((returns) => Car)
    public async addCar(@Args("data") data: NewCarInput): Promise<Car>
    {
        const car = await this.service.addCar(data).catch((err) => {
            throw err;
        });
        return car;
    }
}