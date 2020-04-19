/**
 * requestCovidData
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */
import axios from 'axios';

export async function requestCovidData() {
  let response;

  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://bing.com/covid/data'; // site that doesn’t send Access-Control-*

  try {
    response = await axios.get( proxyurl + url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  } catch ( e ) {
    console.log( `Failed to fetch countries: ${e.message}`, e );
    return;
  }
}

// export async function getCovidData() {
//     if(!COVID_DATA){
//         console.log("covid_data does not exist...");
//         COVID_DATA = await requestCovidData();
//     }
//     console.log("Returning covid data ...%o", COVID_DATA);
//     return COVID_DATA;
// }
