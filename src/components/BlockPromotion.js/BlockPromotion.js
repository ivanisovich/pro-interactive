import infinity from "../../img/infinity.png";
import mask from "../../img/mask.png";
import photos from "../../img/photos.png";
import price from "../../img/price.png";
import headerGroup from "../../img/Group-2.png";
import logo from "../../img/logo.png";
import videoPreview from "../../img/video-preview.jpg";
import playVideo from "../../img/play.svg";
import "./BlockPromotion.css";
function BlockPromotion() {
  return (
    <>
      <div className="block-promotion">
        <img src={logo}></img>
        <div className="block-promotion__video">
          <img
            className="block-promotion__video__group"
            src={headerGroup}
          ></img>
          <img
            className="block-promotion__video-preview"
            src={videoPreview}
          ></img>
          <div className="block-promotion_play-button">
            <img src={playVideo}></img>
          </div>
          <div className="block-promotion__video__circle">
            <div />
          </div>
        </div>

        <div className="block-promotion__features">
          <h1 className="block-promotion__header">Фото на </h1>
          <h1 className="block-promotion__header">праздник</h1>
          <p className="block-promotion__features__title">
            Lorem ipsum dolor sit amet, consectetur <a>adipiscing elit</a>, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="block-promotion__features-wrapper">
            <article  className="block-promotion__feature">
              <img src={infinity}></img>
              <p>
                Безлимитная <br /> печать фото
              </p>
            </article>
            <article  className="block-promotion__feature">
              <img src={mask}></img>
              <p>
                Фотореквизит <br /> в наличии
              </p>
            </article>
            <article  className="block-promotion__feature">
              <img src={photos}></img>
              <p>
                Фотоотчет в <br /> электронном виде
              </p>
            </article>
            <article  className="block-promotion__feature">
              <img src={price}></img>
              <p>
                Цены <br /> ниже рынка
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockPromotion;
