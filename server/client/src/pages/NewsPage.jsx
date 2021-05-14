import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/NewsPage.css";
import Newsletter from "../components/Newsletter";
import Loader from "../components/Loader";
import axios from "axios";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        "https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=7adb104d3b62412cb3045fe4761b7386"
      );

      const data = await result.json();
      console.log(data);
      setNews(data.articles);
    };
    fetchData();
    setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Navigation />
          <div className="NewsMain">
            <h1>Health News</h1>
            {/* <h2>
          Cloud Medic reports on emerging research, new treatments, diet,
          exercise, and trending topics in health and wellness from around the
          world.
        </h2> */}
            <br />
            <br />
            <ul className="NewsTop">
              {news.map((item) => (
                <div className="NewsItems">
                  <img src={item.urlToImage} alt="" />
                  <div className="NewsItemsB">
                    <p className="NewsTitle">{item.title}</p>
                    <br />
                    <p className="NewsAuthor">Written by: {item.author}</p>
                    <br />
                    <p className="NewsDesc">{item.description}</p>
                    <br />
                    <a href={item.url}> Read More</a>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <Newsletter />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewsPage;
