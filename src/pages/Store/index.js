import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../../components/StoreItem';
import storeItems from '../../data/products.json';
import { ShoppingCart } from '../../components/ShoppingCart';

export function Store() {
  return (
    <>
      <h1>Loja</h1>
      <ShoppingCart />
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
