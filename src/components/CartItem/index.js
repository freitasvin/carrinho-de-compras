/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import products from '../../data/products.json';
import { formatCurrency } from '../../utilities/formatCurrency';

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const item = products.find((i) => i.id === id);

  if (item == null) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap="2" className="d-flex align-items-center">
      <img src={item.imgUrl} alt={`${item.name}`} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
      <div className="me-auto">
        {item.name}
        {' '}
        { quantity > 1
        && (
        <span className="text-muted" style={{ fontSize: '.65rem' }}>
          {quantity}
          x
        </span>
        )}
        <div>
          <span className="text-muted" style={{ fontSize: '.70rem' }}>
            {formatCurrency(item.price)}
          </span>
        </div>
      </div>
      <div>
        <span style={{ fontSize: '1rem' }}>{formatCurrency(item.price * quantity)}</span>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        &times;
      </Button>
    </Stack>
  );
}
