import "./OrderModal.css";
import React, { useEffect } from "react";
import closeModal from "../../img/close-modal.svg";

function OrderModal(props) {
  const rentTimeOptions = [
    "1 час",
    "2 часа",
    "3 часа",
    "5 часов",
    "2 дня",
    "3 дня",
  ];
  useEffect(() => {
    if (props.currentRentTime === "выставка 2 дня") {
      props.setCurrentRentTime("2 дня");
    }
    if (props.currentRentTime === "выставка 3 дня") {
      props.setCurrentRentTime("3 дня");
    }
  }, [props]);
  const handleCloseModal = (e) => {
    e.preventDefault();
    props.setShowOrder(false);
  };
  const handleSetRentTime = (e) => {
    props.setCurrentRentTime(e.target.innerText);
  };

  const calculatePrice = (noOptions) => {
    let price = 14500;
    props.currentOptions.forEach((option) => {
      price += option.price;
    });

    let rentTimeAdjustment =
      rentTimeOptions.indexOf(props.currentRentTime) * 500;
    price += rentTimeAdjustment;
    props.setTotalPrice(price);
    if (noOptions === "") {
      price = 14500;
      price += rentTimeAdjustment;
    }

    return price;
  };
  const OpenRentTimeOptions = (e) => {
    e.target.nextSibling.classList.toggle("hidden");
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
  };
  let noOptions = "";

  return (
    <>
      <form className="order-modal">
        <h1>Ваша заявка</h1>
        <img
          className="order-modal__close-button"
          alt=""
          height="17.5px"
          width="17.5px"
          src={closeModal}
          onClick={handleCloseModal}
        ></img>
        <div className="order-modal__item">
          <div className="order-modal__item-description">
            <div>
              <p>Фотобудка с ширмой #{props.photoBoothNumber}</p>
              <span className="order-modal__item-size">Размер: </span>
              <span className="order-modal__item-size order-modal__item-size-grey">
                2м x 1.5м x 2м
              </span>
              <p
                className="order-modal__rent-time-toggle"
                onClick={OpenRentTimeOptions}
              >
                {props.currentRentTime}
              </p>
              <ul className="order-modal__rent-time hidden">
                <li onClick={handleSetRentTime}>1 час</li>
                <li onClick={handleSetRentTime}>2 часа</li>
                <li onClick={handleSetRentTime}>3 часа</li>
                <li onClick={handleSetRentTime}>5 часов</li>
                <li onClick={handleSetRentTime}>2 дня </li>
                <li onClick={handleSetRentTime}>3 дня</li>
              </ul>
            </div>

            <span className="order-modal__item-description__price">
              {" "}
              {calculatePrice(noOptions)} ₽
            </span>
          </div>

          <ul className="order-modal__item-options">
            {props.currentOptions.map((item, index) => {
              return (
                <li key={index} className="order-modal__item-option">
                  <span>{item.label}</span>
                  <span>{item.price}₽</span>
                </li>
              );
            })}
            <li className="order-modal__final-price">
              <span>Итого:</span>
              <span>{calculatePrice()}₽</span>
            </li>
          </ul>
        </div>

        <div className="order-modal__feedback">
          <input placeholder="+7 (000) 000 00 00" type="number"></input>
          <div>
            <span>Позвоните мне</span>
          </div>
        </div>
        <button onClick={handleSubmitButton} type="submit">
          Отправить заявку
        </button>
      </form>
    </>
  );
}

export default OrderModal;
