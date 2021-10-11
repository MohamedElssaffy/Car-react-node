export interface ICar {
  name: string;
  thumbnailUrl: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
}

export interface homePageState {
  topCars: ICar[];
}

export interface AppRootState {
  homePage: homePageState;
}
