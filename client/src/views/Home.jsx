import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  SwiperCore.use(Navigation);
  console.log(saleListings);
  useEffect(() => {
    async function fetchOfferListings() {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=3");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchRentListings() {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=3`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    }
    async function fetchSaleListings() {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=3`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOfferListings();
  }, []);

  return (
    <div className="">
      {/* The top which briefly showcases our website */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Discover Your <span className="text-slate-500">Dream Home</span>{" "}
          <br />
          with Confidence
        </h1>
        <div className="text-gray-400 text-sm sm:text-lg">
          With our personalized approach and continual expert guidance, your
          path to a new beginning is clear and straightforward.
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          to={"/search"}
        >
          Let's start now!
        </Link>
      </div>
      {/* Creating Swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {offerListings &&
          offerListings.length > 1 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing result for offer, sale and rent */}
      {/* for offer */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            {" "}
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-sm text-blue-800 hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* for rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {rentListings && rentListings.length > 0 && (
          <div className="">
            {" "}
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places for Rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-sm text-blue-800 hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* for sale */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {saleListings && saleListings.length > 0 && (
          <div className="">
            {" "}
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places for Sale
              </h2>
              <Link
                to={"/search?type=sale"}
                className="text-sm text-blue-800 hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
