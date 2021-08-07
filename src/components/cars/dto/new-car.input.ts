import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from 'class-validator'

@InputType()
export class NewCarInput {
    @Field()
    name: string;

    @Field(type => Int)
    @Max(10000, {message: "Price can't be that high!"})
    @Min(10, {message: "Price can't be that low!"})
    dailyPrice: number;

    @Field(type => Int)
    @Max(300000, {message: "Price can't be that high!"})
    @Min(10, {message: "Price can't be that low!"})
    monthlyPrice: number;

    @Field()
    mileage: string;
    
    @Field()
    gas: string;
    
    @Field()
    gearType: string;
    
    @Field()
    thumbnailUrl: string;
}