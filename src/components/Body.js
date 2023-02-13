import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import { api_link } from "../config";
import useOnline from "../utils/useNetwork";
const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [firstname, setfistname] = useState("");
  const [searchrestaurant, setSearchRestaurants] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    const data = await fetch(api_link);
    const json = await data.json();

    setSearchRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  const offline = useOnline();

  if (!offline) return <h1>Please check your internet connection</h1>;

  if (!allrestaurant) return null;
  return allrestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="search-conatiner">
          <input
            className="ml-28 w-[1100px] border-2 border-black "
            type="text"
            placeholder="Search....."
            data-testid="Search-input"
            value={firstname}
            onChange={(event) => {
              setfistname(event.target.value);
            }}
          ></input>
          <button
            data-testid="search-btn"
            className="ml-2 mt-1 p-2 w-20  border-2  rounded-md  hover:border-black hover:bg-slate-200 "
            onClick={() => {
              const data = filterdata(firstname, allrestaurant);
              setSearchRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap ml-6  " data-testId="rest-details">
          {searchrestaurant.length > 0 ? (
            searchrestaurant.map((rest) => {
              //console.log(rest);
              return (
                <Link
                  className="Restaurant-Link"
                  to={"/restuarant/" + rest.data.id}
                  key={rest.data.id}
                >
                  <RestaurantCard {...rest.data} />
                </Link>
              );
            })
          ) : (
            <h1>Not Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
