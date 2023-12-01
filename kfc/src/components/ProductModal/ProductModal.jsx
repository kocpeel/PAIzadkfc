import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBack, MdArrowForward, MdFavoriteBorder } from "react-icons/md";
import "./ProductModal.scss";

const ProductModal = ({ product, onProductSelect, onProductDeselect }) => {
  const [amount, setAmount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const handleAddClick = () => {
    setAmount(amount + 1);
  };

  const handleRemoveClick = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddToBasketClick = () => {
    onProductSelect({ ...product, amount });
  };

  const handleAddToFavorites = () => {
    if (!favorites.some((favorite) => favorite.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  if (!product) {
    return null;
  }

  const { imageUrl, name, description, price } = product;

  return (
    <div className="ProductModal">
      <nav>
        <button id="back" onClick={onProductDeselect}>
          <MdArrowBack />
        </button>
        <button id="like" onClick={handleAddToFavorites}>
          <MdFavoriteBorder />
        </button>
      </nav>
      <div id="product">
        <img src={imageUrl} alt={name} />
        <div>
          <div>
            <strong>{name}</strong>
            <span>{description}</span>
          </div>
          <strong>{price}</strong>
        </div>
      </div>
      <div id="addWhatYouLike">
        <nav>
          <h1>Dodaj to co lubisz</h1>
          <div>
            <button id="back">
              <MdArrowBack fill="#DFDFDF" />
            </button>
            <button id="forward">
              <MdArrowForward fill="red" />
            </button>
          </div>
        </nav>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {favorites.map((favorite) => (
            <div className="carouselProduct" key={favorite.id}>
              <img src={favorite.imageUrl} alt={favorite.name} />
              <h2>{favorite.name}</h2>
              <p>{favorite.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <footer>
        <div>
          <button onClick={handleRemoveClick} id="less">
            -
          </button>
          <h2 id="howMany">{amount}</h2>
          <button onClick={handleAddClick} id="more">
            +
          </button>
        </div>
        <button id="add" onClick={handleAddToBasketClick}>
          Dodaj do koszyka {product.price}
        </button>
      </footer>
    </div>
  );
};

export default ProductModal;
