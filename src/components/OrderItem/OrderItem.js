import "./OrderItem.css";
import "./CustomCheckbox.css";
import React, { useState, useEffect } from "react";
import slide_1 from "../../img/photo.jpg";
import slide_2 from "../../img/photo-1.jpg";
import slide_3 from "../../img/photo-2.jpg";
import optionPhoto from "../../img/photo-option.jpg";
import button from "../../img/button.png";

function OrderItem(props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const allOptions = props.allOptions;
  const [currentOptions, setCurrentOptions] = [
    props.currentOptions,
    props.setCurrentOptions,
  ];

  const sliderLength = [1, 2, 3];
  const [currentSlideSrc, setCurrentSlideSrc] = useState(slide_1);
  const rentTimeOptions = [
    "1 час",
    "2 часа",
    "3 часа",
    "5 часов",
    "выставка 2 дня",
    "выставка 3 дня",
  ];

  const additionalOptions = () => {
    let options = [];
    for (let i = 0; i < 10; i++) {
      let option = {
        label: `${"Разработка макета #" + (i + 1)}`,
        price: 2500 + i * 500,
      };
      options.push(option);
    }
    return options;
  };

  useEffect(() => {
    if (props.currentRentTime === "2 дня") {
      props.setCurrentRentTime("выставка 2 дня");
    }
    if (props.currentRentTime === "3 дня") {
      props.setCurrentRentTime("выставка 3 дня");
    }
  }, [props]);
  function handleClickNext() {
    if (currentSlide === 1) {
      setCurrentSlide(2);
      setCurrentSlideSrc(slide_2);
    } else {
      setCurrentSlide(3);
      setCurrentSlideSrc(slide_3);
    }
  }

  function handleClickPrevious() {
    if (currentSlide === 3) {
      setCurrentSlide(2);
      setCurrentSlideSrc(slide_2);
    } else {
      setCurrentSlide(1);
      setCurrentSlideSrc(slide_1);
    }
  }
  function handleSubmitOption(e) {
   
    if (
      !currentOptions.some(
        (element) => element.label === additionalOptions()[e.target.id].label
      )
    ) {
      let newOptions = [...currentOptions];
      newOptions.push(allOptions[e.target.id]);
      setCurrentOptions(newOptions);
    } else {
      let newOptions = currentOptions.filter(
        (item) => item.label !== additionalOptions()[e.target.id].label
      );

      setCurrentOptions(newOptions);
      if (currentOptions.length < 1) {
      }
    }
  }
  const handleSetRentTime = (e) => {
    props.setCurrentRentTime(e.target.innerText);
  };
  const handleOrderButton = (e) => {
    if (currentOptions.length !== 0) {
      props.setShowOrder(true);
      props.setPhotoBoothNumber(props.photoBoothNumber);
    }
  };

  const calculatePrice = () => {
    let price = 14500;
    currentOptions.forEach((option) => {
      price += option.price;
    });

    let rentTimeAdjustment =
      rentTimeOptions.indexOf(props.currentRentTime) * 500;
    price += rentTimeAdjustment;

    props.setTotalPrice(price);
    return price;
  };
  const optionsError = () => {
    return <span className="error">Выберите хотя бы одну опцию !</span>;
  };
  return (
    <>
      <div className="block-order__item">
        <div className="block-order__slider">
          <img
            height="40px"
            width="40px"
            className="slider__previous"
            alt=""
            onClick={handleClickPrevious}
            src={button}
          ></img>
          <img
            height="40px"
            width="40px"
            className="slider__next"
            alt=""
            onClick={handleClickNext}
            src={button}
          ></img>
          <img
            height="222px"
            width="296px"
            alt="current photobooth slide"
            src={currentSlideSrc}
          ></img>
        </div>
        <div className="slider__navigation">
          {sliderLength.map((sliderCount, index) => {
            return (
              <div
                key={index}
                className={
                  currentSlide === sliderCount
                    ? "slider__navigation__item active"
                    : "slider__navigation__item"
                }
              >
                <div></div>
              </div>
            );
          })}
        </div>

        <h1 className="block-order__photo-booth-number">
          Фотобудка с ширмой #{props.photoBoothNumber}
        </h1>
        <span className="block-order__item-size">Размер: </span>
        <span className="block-order__item-size block-order__item-size-grey">
          2м x 1.5м x 2 м
        </span>
        <p className="block-order__item-options__header">Доп. опции</p>
        <div className="block-order__item-options">
          {props.additionalOptions().map((option, index) => {
            return (
              <div className="block-order__item-option" key={index}>
                <img
                  height="60px"
                  width="60px"
                  alt="additional option"
                  src={optionPhoto}
                ></img>
                <div>
                  <h1>{option.label}</h1>
                  <span>{option.price}₽</span>
                </div>

                <label   className="control control-checkbox">
              
                  <input
                  name={index}
                    id={index}
                    checked={
                      currentOptions.some(
                        (element) =>
                          element.label === additionalOptions()[index].label
                      )
                        ? true
                        : false
                    }
                    type="checkbox"
                    onChange={handleSubmitOption}
                  ></input>
                  <div className="control_indicator"></div>
                  <label className="label-hidden"  for={index} >2</label>
                </label>
              </div>
            );
          })}
        </div>
        <div className="block-order__rent-time">
          <p>Укажите время аренды</p>
          {rentTimeOptions.map((option, index) => {
            return (
              <span
                onClick={handleSetRentTime}
                className={
                  props.currentRentTime.includes(option)
                    ? "block-order__rent-time__item active"
                    : "block-order__rent-time__item"
                }
                key={index}
              >
                {option}
              </span>
            );
          })}
        </div>
        <div className="block-order__final-price__wrapper">
          <h1 className="block-order__final-price">{calculatePrice()} ₽</h1>
          {currentOptions.length < 1 ? optionsError() : ""}
          <button
            className="block-order__order-button"
            onClick={handleOrderButton}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
