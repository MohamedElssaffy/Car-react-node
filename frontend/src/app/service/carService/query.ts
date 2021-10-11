import gql from 'graphql-tag';

export const GET_ALL_CARS_QUERY = gql`
  query {
    cars {
      id
      name
      gas
      dailyPrice
      mileage
      monthlyPrice
      thumbnailUrl
      gearType
    }
  }
`;
