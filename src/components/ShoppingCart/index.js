import React, { useContext } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { CartItem } from '../CartItem';
import products from '../../data/products.json';
import { formatCurrency } from '../../utilities/formatCurrency';

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
              <CartItem key={item.id} {...item} />
            ))}
          <div className="ms-auto fw-bold fs-5">
            Total:
            {' '}
            {
              formatCurrency(cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return (
                  total + (item?.price || 0) * cartItem.quantity
                );
              }, 0))
            }
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
