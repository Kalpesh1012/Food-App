import { IMG_CDN_LINK } from "../config";

const OfferRestaurant = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
  avgRating,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="p-3 m-3 w-64 h-[330px] overflow-auto  hover:border-4">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{lastMileTravel} KM</h4>
      <h4 className="font-semibold text-amber-900 border-t-[1px]">
        {aggregatedDiscountInfo.descriptionList[0].meta}
      </h4>
    </div>
  );
};
export default OfferRestaurant;
