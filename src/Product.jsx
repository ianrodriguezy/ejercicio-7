import PropTypes from 'prop-types';
import styles from './Product.module.css';
import { useState } from 'react';

Product.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

export function Product({ sku, name, price, image, description, stock }) {
  const [currentStock, setCurrentStock] = useState(stock);

  const formattedDescription = description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const handleClick = () => {
    if (currentStock > 0) {
      setCurrentStock(currentStock - 1);
      alert('Gracias por su compra.');
    } else {      
      alert('Lo sentimos, este producto está agotado.');
    }
  };

  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={image} alt={sku} />
      <section className={styles.productInfo}>
        <h1 className={styles.productName}>{name}</h1>
        <h2 className={styles.productPrice}>
          ${price.toLocaleString('es-ES')}
          <p className={styles.productSku}>SKU: {sku}
           <span className={styles.productStock}>{stock === 0 ? 'Sin stock' : `Stock: ${currentStock}`}</span>
          </p>
        </h2>

        <p className={styles.productDescription}>{formattedDescription}</p>
        <button className={styles.btn} onClick={handleClick}>Comprar</button>
      </section>
    </div>
  );
}