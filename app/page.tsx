"use client";

import { useGetCountries } from "@/api/gqlQuery/getCountries";
import { Country, getCountryInfo } from "@/api/gqlQuery/getCountryInfo";
import { Meta } from "@/components/Meta";
import { useState } from "react";

const Home = () => {
  const { countries, isLoading } = useGetCountries();
  const [currentCountry, setCurrentCountry] = useState<Country>();
  const [isCurrentCountryLoading, setIsCurrentCountryLoading] = useState(false);

  //fetch additional country data after click
  const onCountryClick = (code: string) => {
    setIsCurrentCountryLoading(true);

    getCountryInfo(code)
      .then((country) => {
        if (country) setCurrentCountry(country);
        else console.log("no country");

        setIsCurrentCountryLoading(false);
      })
      .catch((error) => console.log(JSON.stringify(error)));
  };

  return (
    <Meta title="Main">
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex gap-4 w-full relative">
            <div
              className="flex flex-col gap-1 bg-lightBlue rounded p-4"
              style={{ flex: 2 }}
            >
              {countries.map((country) => (
                <div key={country.code}>
                  <div
                    className="cursor-pointer p-3 bg-orange rounded border-bronze border-solid border-2  hover:text-white hover:border-white"
                    onClick={() => onCountryClick(country.code)}
                  >
                    {country.name}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="p-3 text-secondary bg-white rounded h-fit sticky top-3"
              style={{ flex: 2, opacity: currentCountry ? 1 : 0 }}
            >
              <>
                {isCurrentCountryLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <div>Capital: {currentCountry?.capital}</div>
                    <div>Currency: {currentCountry?.currency}</div>
                    <div>Phone: {currentCountry?.phone}</div>
                  </>
                )}
              </>
            </div>
          </div>
        )}
      </main>
    </Meta>
  );
};

export default Home;
