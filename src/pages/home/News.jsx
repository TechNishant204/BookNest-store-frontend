import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description:
      "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: news1,
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description:
      "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: news2,
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description:
      "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: news3,
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description:
      "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: news4,
  },
  {
    id: 5,
    title: "Innovative New Smartphone Released by Leading Tech Company",
    description:
      "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
    image: news2,
  },
];

const News = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 tracking-tight">
        Latest News
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 group">
              {/* Image with hover effect */}
              <div className="flex-shrink-0 w-full sm:w-56 overflow-hidden rounded-xl shadow-md mb-6 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <Link to="/" className="block">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </Link>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                <p className="text-gray-600 text-base mb-6">
                  {item.description}
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline hover:text-purple-600 transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
