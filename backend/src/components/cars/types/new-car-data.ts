import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class CarData {
  @Field()
  name: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  gas: string;

  @Field()
  mileage: string;

  @Field(() => Int)
  @Max(1000)
  @Min(10)
  dailyPrice: number;

  @Field(() => Int)
  @Max(20000)
  @Min(1500, { message: 'Our minmum price per month is 1500' })
  monthlyPrice: number;

  @Field()
  gearType: string;
}
