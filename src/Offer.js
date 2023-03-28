import { useEffect, useState } from "react";
import OfferRestaurant from "./components/OfferRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Offer = () => {
  const [offerrestaurant, setOfferRestaurant] = useState([]);
  useEffect(() => {
    res();
  }, []);

  async function res() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/offers/restaurant?lat=21.1651678&lng=72.84010099999999&offset=0"
      );
      const json = await data.json();

      setOfferRestaurant(json.data.cards);
    } catch (error) {
      console.log(error);
    }
  }
  if (!offerrestaurant) return null;

  return (
    <div className="flex flex-wrap ml-8  ">
      {offerrestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        offerrestaurant
          .filter(function (restoi) {
            return restoi.cardType === "restaurant";
          })
          .map(function (restoi) {
            return (
              <>
                <Link
                  className="Restaurant-Link"
                  to={"/restuarant/" + restoi.data.data.id}
                  key={restoi.data.data.id}
                >
                  <OfferRestaurant {...restoi.data.data} />
                </Link>
              </>
            );
          })
      )}
    </div>
  );
};
export default Offer;
