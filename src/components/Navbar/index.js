import {Button, Container, Nav, Navbar as NavbarBs, NavLink} from 'react-bootstrap';
import cart from '../../images/cart.svg';

export function Navbar(){
  return(
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>  
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button style={{width: "3rem", height: "3rem"}}
          className="rounded-circle pb-3 pt-2">
          <img src={cart}/>

          <div className="rounded-circle bg-danger d-flex justify-content-center
          align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            transform: "translate(60%)",
          }}>

            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  )
}