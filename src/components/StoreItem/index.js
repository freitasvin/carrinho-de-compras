import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { formatCurrency } from '../../utilities/formatCurrency';

export function StoreItem({
  id, name, price, image,
}) {
  const quantity = 1;
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
              <Button className="w-100">
                + Add to cart
              </Button>
            )
            : (
              <div className="d-flex flex-column align-items-center" style={{ gap: '.5rem' }}>
                <div className="d-flex flex-row align-items-center justfify-content-center" style={{ gap: '.5rem' }}>
                  <Button>-</Button>
                  <span className="fs-5">1</span>
                  <span>in cart</span>
                  <Button>+</Button>
                </div>
                <Button className="btn-sm bg-danger">Remove</Button>
              </div>
            )}
        </div>

      </Card.Body>
    </Card>
  );
}
