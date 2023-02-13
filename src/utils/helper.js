export function filterdata(firstname, search) {
  const filtersdata = search.filter((restau) =>
    restau.data.name.toLowerCase().includes(firstname.toLowerCase())
  );

  return filtersdata;
}
