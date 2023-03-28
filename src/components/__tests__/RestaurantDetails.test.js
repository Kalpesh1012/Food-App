import RestaurantDetails from "../RestaurantDetails";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../utils/store";
import { Menu_Dummy_Data } from "../../utils/mocks/DummyJson";
import Header from "../Header";

test("This is the test for our specific restaurant menu", () => {
  const restaurantdetail = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantDetails />
      </Provider>
    </StaticRouter>
  );
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(Menu_Dummy_Data);
      },
    });
  });
  console.log(restaurantdetail);
});
