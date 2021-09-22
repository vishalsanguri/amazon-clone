import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { useHistory } from "react-router-dom";
import SpecificItem from "../SpecificItem/SpecificItem";
import ImageSlider from "../ImageSlider/ImageSlider";
import Suspense from "../Suspense/Suspense";
import Footer from "../Footer/Footer";
import { currentContext } from "../../App";

export default function Main() {
  const { currentitem, setCurrentitem } = useContext(currentContext);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [headphones, setHeadphones] = useState([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function showContentItem(item) {
    setCurrentitem({ ...currentitem, ...item });
  }
  function menSectionRedirect() {
    history.push("/mensection");
  }
  useEffect(() => {
    async function fetchdata() {
      await fetch("https://amazon-backend-server.herokuapp.com/data")
        .then((req) => req.json())
        .then((data) => {
          setData(data);
        });
    }
    fetchdata();
  }, []);
  useEffect(() => {
    async function fetchdata() {
      await fetch("https://amazon-backend-server.herokuapp.com/data1")
        .then((req) => req.json())
        .then((data) => {
          setHeadphones(data);
        });
    }
    fetchdata();
  }, []);
  return (
    <>
      {currentitem.id ? (
        <SpecificItem
          setCurrentitem={setCurrentitem}
          currentitem={currentitem}
        />
      ) : null}

      <div className="main-container">
        <ImageSlider />
        <div className="abc">
          <div className="dummy-data">
            <div className="dummy-data-container1"></div>
            <div className="dummy-data-container2"></div>
            <div className="dummy-data-container3"></div>
            <div className="dummy-data-container4"></div>
          </div>
          <div className="real-data">
            {data.length !== 0 ? (
              data.map((item, i) => {
                return (
                  <div
                    onClick={() => showContentItem(item)}
                    key={i}
                    className="item-container"
                  >
                    <img
                      src={item.imgUrl}
                      alt="product"
                      className="image-of-item"
                    />
                  </div>
                );
              })
            ) : (
              <Suspense />
            )}
          </div>
          <div className="music-no-life"></div>
          <div className="real-data">
            {headphones.length !== 0 ? (
              headphones.map((item, i) => {
                return (
                  <div
                    onClick={() => showContentItem(item)}
                    key={i}
                    className="item-container"
                  >
                    <img
                      src={item.imgUrl}
                      alt="product"
                      className="image-of-item"
                    />
                  </div>
                );
              })
            ) : (
              <Suspense />
            )}
          </div>
          <div className="real-data-men">
            <div className="men-heading">
              Up to 70% off | Bestselling Men's Clothing
            </div>
            <div className="men-dummy" onClick={menSectionRedirect}></div>
          </div>
          <Footer scroll={scrollToTop} />
        </div>
      </div>
    </>
  );
}
