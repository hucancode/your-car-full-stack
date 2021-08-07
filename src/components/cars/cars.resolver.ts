import { Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";

@Resolver()
export class CarsResolver {
    constructor(private service: CarsService) {

    }

    @Query((returns) => String)
    public async cars() {
        return "Welcome to Your Car shop";
    }
}