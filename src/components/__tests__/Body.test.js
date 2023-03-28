import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../Body";
import { Resturant_Dummy_Data } from "../../utils/mocks/DummyJson";
import Shimmer from "../Shimmer";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Resturant_Dummy_Data);
    },
  });
});

test("Shimmer for a search Page", () => {
  const shimmer = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmeSearch = shimmer.getByTestId("shimmer");
  console.log(shimmeSearch);

  expect(shimmeSearch.children.length).toBe(15);
});

test("Testing of a search Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const rest = body.getByTestId("rest-details");
  console.log(rest);
  expect(rest.children.length).toBe(15);
});

test("Testing for a search input and click of a restaurant", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const input = body.getByTestId("Search-input");

  fireEvent.change(input, {
    target: {
      value: "Restaurant",
    },
  });
  const btn = body.getByTestId("search-btn");
  fireEvent.click(btn);

  const rest = body.getByTestId("rest-details");
  expect(rest.children.length).toBe(3);
});
