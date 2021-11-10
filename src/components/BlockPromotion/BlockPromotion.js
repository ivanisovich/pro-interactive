import "./BlockPromotion.css";
import infinity from "../../img/infinity.png";
import mask from "../../img/mask.png";
import photos from "../../img/photos.png";
import price from "../../img/price.png";
import headerGroup from "../../img/Group-2.png";
import logo from "../../img/logo.png";
import videoPreview from "../../img/video-preview.jpg";
import playVideo from "../../img/play.svg";

function BlockPromotion() {
  return (
    <>
      <div className="block-promotion">
        <img
          height="60px"
          width="63px"
          className="block-promotion__logo"
          alt="logo"
          src={logo}
        ></img>
        <div className="block-promotion__video">
          <img
            height="44px"
            width="80px"
            alt=""
            className="block-promotion__video__group"
            src={headerGroup}
          ></img>
          <img
            height="188px"
            width="315px"
            alt="promotion video preview"
            className="block-promotion__video-preview"
            src={videoPreview}
          ></img>
          <form action="https://www.youtube.com/watch" method="get">
            <input type="hidden" name="v" value="IZ-WcElrA-c" />
            <button
              className="block-promotion_play-button-hidden"
              type="submit"
            >
              <div className="block-promotion_play-button">
                <img
                  height="17px"
                  width="11px"
                  alt="promotion video play button"
                  src={playVideo}
                ></img>
              </div>
            </button>
          </form>

          <div className="block-promotion__video__circle">
            <div />
          </div>
        </div>

        <div className="block-promotion__features">
          <h1 className="block-promotion__header">Фото на </h1>
          <h1 className="block-promotion__header">праздник</h1>
          <p className="block-promotion__features__title">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span >adipiscing elit</span>, sed do eiusmod tempor <br />{" "}
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="block-promotion__features-wrapper">
            <article className="block-promotion__feature">
              <img height="21px" width="42px" alt="" src={infinity}></img>
              <p>
                Безлимитная <br /> печать фото
              </p>
            </article>
            <article className="block-promotion__feature">
              <img height="48px" width="48px" alt="" src={mask}></img>
              <p>
                Фотореквизит <br /> в наличии
              </p>
            </article>
            <article className="block-promotion__feature">
              <img height="34px" width="41px" alt="" src={photos}></img>
              <p>
                Фотоотчет в <br /> электронном виде
              </p>
            </article>
            <article className="block-promotion__feature">
              <img height="35px" width="35px" alt="" src={price}></img>
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
