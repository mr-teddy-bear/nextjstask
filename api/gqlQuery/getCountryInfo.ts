import axios, { AxiosResponse } from "axios";

export type Country = { capital: string; currency: string; phone: string };

export const getCountryInfo = async (code: string) => {
  try {
    const response: AxiosResponse<{
      data: {
        country: Country;
      };
    }> = await axios.post("https://countries.trevorblades.com/", {
      query: `
        query {
          country(code: "${code}") {
            capital
            currency
            phone
          }
        }
      `,
    });

    return response.data.data.country;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
