import countries from "../first";

it("should get basic data on the country canada", async () => {
  const data = await countries.getCountry("canada");
  expect(data).toEqual({
    capital: "Ottawa",
    region: "Americas",
    numericCode: 9984670,
  });
});

/** Add test for getRegionCountries function here */

// it("should get capitals of NAFTA countries", async () => {
//   const data = await countries.getRegionCapitals("nafta");
//   expect(data).toEqual(["Ottawa", "Mexico City", "Washington, D.C."]);
// });
