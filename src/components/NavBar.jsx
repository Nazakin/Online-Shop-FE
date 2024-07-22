import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark" className="p-2">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Comfy
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: "white", marginLeft: "auto" }}>
            <Button
              variant="outline-light"
              style={{ marginRight: "10px " }}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button variant="outline-light" onClick={() => logOut()}>
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "white", marginLeft: "auto" }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
