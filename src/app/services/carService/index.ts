import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { GetCars_cars } from "./__generated__/GetCars";

class CarService {
    public async getCars() : Promise<GetCars_cars> {
        const response = await apolloClient.query({query: GET_ALL_CARS}).catch((err) => {
            throw err;
        })
        return response.data || [];
    }
}

export default new CarService();