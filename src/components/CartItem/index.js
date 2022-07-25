/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Stack } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import products from '../../data/products.json';

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const item = products.find((i) => i.id === id);

  if (item == null) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap="2" className="d-flex align-items-center">
      <img src={item.imgUrl} alt={`${item.name}`} style={{ width: '125px', heigth: '75px', objectFit: 'cover' }} />
    </Stack>
  );
}
