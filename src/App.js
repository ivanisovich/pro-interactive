import "./App.css";
import React, { useState } from "react";
import BlockOrder from "./components/BlockOrder/BlockOrder";
import BlockPromotion from "./components/BlockPromotion.js/BlockPromotion";
import OrderModal from "./components/OrderModal/OrderModal";

function App() {
  const [currentRentTime, setCurrentRentTime] = useState("1 час");
  const [currentOptions, setCurrentOptions] = useState([
    { label: "Разработка макета #1", price: 2500 },
  ]);
  const [photoBoothNumber, setPhotoBoothNumber] = useState(1);
  const [showOrder, setShowOrder] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="App">
      {showOrder ? (
        <OrderModal
          setCurrentOptions={setCurrentOptions}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          photoBoothNumber={photoBoothNumber}
          currentOptions={currentOptions}
          currentRentTime={currentRentTime}
          setCurrentRentTime={setCurrentRentTime}
          setShowOrder={setShowOrder}
        ></OrderModal>
      ) : (
        <>
          <BlockPromotion />
          <BlockOrder
            setTotalPrice={setTotalPrice}
            setShowOrder={setShowOrder}
            setPhotoBoothNumber={setPhotoBoothNumber}
            currentOptions={currentOptions}
            setCurrentOptions={setCurrentOptions}
            currentRentTime={currentRentTime}
            setCurrentRentTime={setCurrentRentTime}
          />
        </>
      )}
    </div>
  );
}

export default App;
