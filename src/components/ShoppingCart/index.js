import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export function ShoppingCart() {
  const { isOpen, closeCart } = useContext(ShoppingCartContext);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
