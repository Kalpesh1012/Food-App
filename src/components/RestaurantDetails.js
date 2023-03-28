import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { addItems } from "./cartSlice";
import { useDispatch } from "react-redux";
import { RESTAURANT_TYPE_KEY } from "../config";
import { MENU_ITEM_TYPE_KEY } from "../config";

const RestaurantDetails = () => {
  const { uniqueid } = useParams();

  const [restaurantdetail, setRestaurantDetail] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getrestaurant();
  }, []);
  async function getrestaurant() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
          uniqueid
      );
      const json = await data.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      setRestaurantDetail(restaurantData);

      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.log(error);
    }
  }
  const dispatch = useDispatch();
  const handleDispatch = (items) => {
    dispatch(addItems(items));
  };

  console.log(menuItems);

  return !restaurantdetail ? (
    <Shimmer />
  ) : (
    <>
      <div className="inline ">
        <div className="flex h-52 w-auto border-2 border-black bg-[#282C3F] ">
          <img
            src={IMG_CDN_LINK + restaurantdetail.cloudinaryImageId}
            className="h-40 w-56 ml-20 mt-5"
          />
          <div className="flex-wrap mt-6">
            <h1 className="ml-36 text-3xl text-white">
              {restaurantdetail.name}
            </h1>
            <h3 className="ml-36 text-sm text-white mt-1">
              {restaurantdetail.cuisines.join(",")}
            </h3>
            <h3 className="ml-36 mt-1 text-white">
              {restaurantdetail.locality},{restaurantdetail.area}
            </h3>
            <div className="flex">
              <div className=" ml-36 mt-4 pr-8 border-r-[1px] ">
                <h3 className="  text-white">
                  {restaurantdetail.avgRating} star
                </h3>
                <h3 className=" text-white text-sm">
                  {restaurantdetail.totalRatingsString}
                </h3>
              </div>
              <div className=" ml-8 mt-4 pr-8 border-r-[1px] ">
                <h3 className="text-white">
                  {restaurantdetail.sla.maxDeliveryTime} minutes
                </h3>
                <h3 className="text-white text-sm">Delievery Time</h3>
              </div>
              <div className="ml-8 mt-4 ">
                <h3 className="text-white">{restaurantdetail.costForTwo}</h3>
                <h3 className="text-white text-sm">Cost for two</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-3xl pb-2 ml-[700px] ">Menu</h2>
          <div data-testid="meme">
            <ul>
              {menuItems.map((items, index) => {
                return (
                  <div
                    className="mt-10 ml-80 flex justify-between h-[170px] w-[900px] border-b-2"
                    key={index}
                  >
                    <div>
                      <li key={items.id} className="pt-6 text-xl ">
                        {items.name}
                      </li>
                      <h1>₹{items.price / 100}</h1>
                      <h1 className="mt-4 font-thin h-16 w-[750px] border-0">
                        {items.description}
                      </h1>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => {
                          handleDispatch(items);
                        }}
                        className="absolute text-green-500 bg-white hover:shadow-2xl   h-8 w-20 border-2 border-black mt-20 ml-6 "
                        data-testid="add-menu"
                      >
                        Add
                      </button>
                      <img
                        src={IMG_CDN_LINK + items.imageId}
                        alt="No Image"
                        className="h-[100px] w-32 pb-2"
                      ></img>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantDetails;
