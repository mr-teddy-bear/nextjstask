import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export type Countries = Array<{
  name: string;
  code: string;
}>;

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Countries>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ data: { countries: Countries } }> =
          await axios.post("https://countries.trevorblades.com/", {
            query: `
                      query {
                        countries {
                          name
                          code
                        }
                      }
                    `,
          });

        const result = response.data;

        setCountries(result.data.countries.map((country) => country));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { countries, isLoading };
};
