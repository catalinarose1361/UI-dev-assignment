import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


// const EXCHANGE_RATES = gql`
//   query  {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;



function Locations() {

  const [api, setApi] = useState([]);
  const query = `{
    
      locationPublicSettings {
        id,
        name
      }
    
  }`

  useEffect(() => {

    axios({
      url: 'https://backendtest.balancescheduler.com/graphql',
      method: 'post',
      data: {
        query

      }
    }).then((result) => {
      console.log(result)
      setApi(result.data.data.locations)
    })

    console.log(api)

  })
  return (
    <div></div>
  )
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // return data.rates.map(({ currency, rate }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));
}

export default Locations;