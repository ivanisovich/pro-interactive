import React,{useEffect} from "react";
import closeModal from "../../img/close-modal.svg";
import "./OrderModal.css";
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
    if(props.currentRentTime === "выставка 2 дня"){
      props.setCurrentRentTime("2 дня")
    }
    if(props.currentRentTime === "выставка 3 дня"){
      props.setCurrentRentTime("3 дня")
    }
  }, []);
  const handleCloseModal = (e) => {
    e.preventDefault()
    props.setShowOrder(false);
  };
  const handleSetRentTime = (e) =>{

    props.setCurrentRentTime(e.target.innerText)
  }
  const calculatePrice = () => {
    let price = 14500;
    props.currentOptions.forEach((option) => {
      price += option.price;
    });

    let  rentTimeAdjustment = rentTimeOptions.indexOf(props.currentRentTime) * 500;
    price += rentTimeAdjustment;
    props.setTotalPrice(price);
    return price;
  };
  const OpenRentTimeOptions = (e) =>{
console.log(e.target.nextSibling.classList.toggle("hidden"))
  }
  console.log(calculatePrice());
       console.log(props.currentRentTime)
  return (
    <>
      <form className="order-modal">
        <h1>Ваша заявка</h1>
        <img src={closeModal} onClick={handleCloseModal}></img>
        <ul>
          <li>
            <p>Фотобудка с ширмой</p>
            <span>Размер: </span>
            <span>2м x 1.5м x 2м</span>
          </li>
        </ul>
        <ul></ul>
   
           <span onClick={OpenRentTimeOptions}>{props.currentRentTime}</span>
          <ul className="order-modal__rent-time hidden">
            <li onClick={handleSetRentTime}>
              1 час
            </li>
            <li onClick={handleSetRentTime}>
              2 часа
            </li>
            <li onClick={handleSetRentTime}>
              3 часа 
            </li>
            <li onClick={handleSetRentTime}>5 часов</li>
            <li onClick={handleSetRentTime}>2 дня </li>
            <li onClick={handleSetRentTime}>3 дня</li>
          </ul>
        <h1>{calculatePrice()}</h1>
        <div className="order-modal__feedback">
          <input placeholder="+7 (000) 000 00 00" type="number"></input>
          <span>Позвоните мне</span>
          
          
        </div>
        <button type="submit">Отправить заявку</button>
      </form>
     
    </>
  );
}

export default OrderModal;
