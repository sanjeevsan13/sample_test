export const getCovidResults = (
  state,
  { data: { confirmed, recovered, deaths, location }, country }
) => {
  const active = confirmed - (recovered + deaths);
  console.log("yyyyy", confirmed, active, country);
  return {
    ...state,
    confirmed,
    active,
    recovered,
    deceased: deaths,
    country,
    error: "",
    location,
  };
};
