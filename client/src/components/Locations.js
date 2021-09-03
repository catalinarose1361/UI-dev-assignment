import React from 'react';

import {

    useQuery,
  
    gql
  
} from "@apollo/client";


const EXCHANGE_RATES = gql`
  query  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;



function Locations() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default Locations;