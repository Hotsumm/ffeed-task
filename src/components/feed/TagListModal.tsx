import classes from './TagListModal.module.css';
import { productList } from '../../data/productList';
import Image from 'next/image';
import { Product } from '../../types/product';

type TagListModalProps = {
  handleSelectProduct: (product: Product) => void;
  handleCloseModal: () => void;
};

export default function TagListModal({
  handleSelectProduct,
  handleCloseModal,
}: TagListModalProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <header>
          <h3>제품 태그</h3>
          <span onClick={handleCloseModal}>X</span>
        </header>
        <div className={classes.product}>
          <ul>
            {productList.map((product) => (
              <li key={product.id} onClick={() => handleSelectProduct(product)}>
                <div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div>{product.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
