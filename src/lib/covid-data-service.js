/**
 * requestCovidData
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */
import axios from 'axios';

export async function requestCovidData() {
  let response;

  //const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://corona.lmao.ninja/v2/countries'; // site that doesn’t send Access-Control-*

  try {
    response = await axios.get( url, {
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

export async function getWorldData() {
  let response;

  //const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://corona.lmao.ninja/v2/all'; // site that doesn’t send Access-Control-*

  try {
    response = await axios.get( url, {
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
