/* eslint-disable valid-jsdoc */
/** Use Axios to get data from restcountries api */
import axios from "axios";

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */

const getCountry = async (country: string) => {
  let { data } = await axios(`https://restcountries.com/v3.1/name/${country}`);
  data = { ...data[0] };

  return {
    capital: data.capital,
    region: data.region,
    numericCode: data.area,
  };
};

/** Create a test for this getRegion function */
const getRegionCountries = async (region: string) => {
  const { data } = await axios(`https://restcountries.com/v3.1/region/${region}`);
  const countries: any[] = [];
  data.forEach((d: any) => countries.push(d.name.common));
  console.log(countries);
  return countries;
};
getCountry("canada");
// getRegionCountries("europe");

/** Create getRegionCapitals function here */
const getRegionCapitals = async () => {};

export default { getCountry, getRegionCountries, getRegionCapitals };
