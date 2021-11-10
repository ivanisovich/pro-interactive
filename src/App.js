import "./App.css";
import logo from './logo.svg';
import React, {lazy, useState ,Suspense} from "react";
import BlockPromotion from "./components/BlockPromotion/BlockPromotion"
import BlockOrder from "./components/BlockOrder/BlockOrder"

function App() {
 
  const OrderModal = lazy(() => import("./components/OrderModal/OrderModal"));
 
  const [currentRentTime, setCurrentRentTime] = useState("1 час");
  const [currentOptions, setCurrentOptions] = useState([{label:"Разработка макета #1",price:2500}]);
  const [photoBoothNumber, setPhotoBoothNumber] = useState(1);
  const [showOrder, setShowOrder] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  
  return (
    <div className="App">
      <Suspense fallback={ <img src={logo} className="App-logo" alt="logo" />}>
      {showOrder && BlockOrder ? (
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
      </Suspense>
   
    </div>
  );
}

export default App;
