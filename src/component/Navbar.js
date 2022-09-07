import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./Css/NavbarComp.css"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; function NavbarComponent() {
  const navigate = useNavigate();

  const state = useSelector((state) => state.addItems);
  function onLinkClick(e, url) {
    e.preventDefault();
    navigate(url);

    // further processing happens here
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={(event) => onLinkClick(event, "/home")} >Home</Nav.Link>
            <Nav.Link onClick={(event) => onLinkClick(event, "/garments")}>Garment</Nav.Link>
            <Nav.Link onClick={(event) => onLinkClick(event, "/electronics")} >Electronics</Nav.Link>
            <Nav.Link onClick={(event) => onLinkClick(event, "/Tools")} >Tools</Nav.Link>
            <Nav.Link onClick={(event) => onLinkClick(event, "/Toys")} >Toys</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link ><Button>Login </Button></Nav.Link>
            <Nav.Link >
              <Button >Sign Up </Button>
            </Nav.Link>
            <Nav.Link className='cart-icon-cs' onClick={(event) => onLinkClick(event, "/addToCartComp")}  >
              <ShoppingCartIcon />
              <span className='add-count-cs'>{state.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;