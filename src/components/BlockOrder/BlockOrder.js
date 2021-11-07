import React, { useState, useEffect } from "react";
import "./BlockOrder.css";
import OrderItem from "../OrderItem/OrderItem";

function BlockOrder(props) {
  const [allOptions, setAllOptions] = useState([]);
  let [HiddenOrderItem, setHiddenOrderItem] = useState(9);
  let OrderItems = () => {
    let items = [];
    for (let i = 0; i < 10 - HiddenOrderItem; i++) {
      items.push(i);
    }
    return items;
  };
  const handleLoadMore = () => {
    if (HiddenOrderItem > 0) {
      setHiddenOrderItem(HiddenOrderItem - 1);
    }
  };
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
   
    setAllOptions(additionalOptions());
  }, []);
 
 
  return (
    <>
      <div className="block-order">
        <h1>Фотобудки</h1>
        {OrderItems().map((item, index) => {
          return (
            <OrderItem
              additionalOptions={additionalOptions}
              allOptions={allOptions}
              setTotalPrice={props.setTotalPrice}
              key={index}
              setShowOrder={props.setShowOrder}
              setPhotoBoothNumber={props.setPhotoBoothNumber}
              currentOptions={props.currentOptions}
              setCurrentOptions={props.setCurrentOptions}
              currentRentTime={props.currentRentTime}
              setCurrentRentTime={props.setCurrentRentTime}
              photoBoothNumber={++index}
            ></OrderItem>
          );
        })}
        <button onClick={handleLoadMore}>Показать еще</button>
      </div>
    </>
  );
}

export default BlockOrder;
