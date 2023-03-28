import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("This is the test of our logo", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);
  expect(logo[0].src).toBe(
    "https://content3.jdmagicbox.com/comp/navi-mumbai/l4/022pxx22.xx22.180901093644.i4l4/catalogue/khao-piyo-sojao-nerul-navi-mumbai-home-delivery-restaurants-j7ab4cza91.jpg"
  );
});

test("This is the test of our Cart Items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const cart = header.getByTestId("cart");
  console.log(cart);
  expect(cart.innerHTML).toBe("Cart-0items");
});
