import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

export function StoreItem({
  id, name, price, image,
}) {
  const {
    getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart,
  } = useContext(ShoppingCartContext);

  const quantity = getItemQuantity(id);

  return (
    <Card key={id}>
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto d-flex justify-content-center">
          {quantity === 0
            ? (
              <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
                + Adicionar ao carrinho
              </Button>
            )
            : (
              <div className="d-flex flex-column align-items-center" style={{ gap: '.5rem' }}>
                <div className="d-flex flex-row align-items-center justfify-content-center" style={{ gap: '.5rem' }}>
                  <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                  <span className="fs-5">{quantity}</span>
                  <span>no carrinho</span>
                  <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                </div>
                <Button className="btn-sm bg-danger" onClick={() => removeFromCart(id)}>Remover</Button>
              </div>
            )}
        </div>

      </Card.Body>
    </Card>
  );
}
