import React, { useContext } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { CartItem } from '../CartItem';

export function ShoppingCart() {
  const {
    isOpen, closeCart, cartItems, cartQuantity,
  } = useContext(ShoppingCartContext);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap="3">
          {cartQuantity === 0 ? <span>Nenhum produto no carrinho</span>
            : cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} />
            ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
