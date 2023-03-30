import { Drawer } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BurgeMenu,
  CartLength,
  CartLengthDiv,
  Div,
  Li,
  Logo,
  MobileCart,
  ShoppingCart,
  StyledLink,
  StyledMenu,
} from "./style";
import styles from "./menu.module.css";
import CartNav from "./cartnav";
import Button from "../Button";
import { clearCart } from "../state/CartSlice";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className={styles.inlineMenu}>
        <HamburgerNav />
      </div>
      <Div className={styles.hamburgerMenu}>
        <Logo>Shoppit</Logo>
        <BurgeMenu onClick={showMenu} />
      </Div>
      <Div>
        <Drawer
          bodyStyle={{ backgroundColor: "#fdebd0" }}
          headerStyle={{ backgroundColor: "#fdebd0" }}
          placement='left'
          title='Menu'
          open={menuOpen}
          onClose={onCloseMenu}
          onClick={onCloseMenu}
        >
          <HamburgerNav isInline onClick={onCloseMenu} />
        </Drawer>
      </Div>
    </div>
  );
};

const HamburgerNav = ({ isInline = false }) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Div>
      <Logo>SHOPPIT</Logo>
      <StyledMenu
        mode={isInline ? "inline" : "horizontal"}
        items={[
          {
            label: <StyledLink to='/'>Home</StyledLink>,
            key: "home",
          },
          {
            label: <StyledLink to='/Contact'>Contact Us</StyledLink>,
            key: "contact",
          },
          {
            label: (
              <Li>
                <ShoppingCart onClick={showDrawer} />
                {cart.item.length === 0 ? (
                  ""
                ) : (
                  <CartLengthDiv>
                    <CartLength>{cart.totalProducts}</CartLength>
                  </CartLengthDiv>
                )}
              </Li>
            ),
            key: "cart",
          },
          {
            label: (
              <MobileCart to='/Cart'>
                Cart {cart.item.length === 0 ? "" : cart.totalProducts}
              </MobileCart>
            ),
            key: "cart",
          },
        ]}
      ></StyledMenu>
      <Drawer
        title='Cart'
        placement='right'
        onClose={closeDrawer}
        open={open}
        bodyStyle={{ backgroundColor: "#fdebd0" }}
        headerStyle={{ backgroundColor: "#fdebd0" }}
      >
        {cart.item.map((item, idx) => {
          return <CartNav key={idx} products={item} />;
        })}
        {cart.item.length ? <p>Total: {Math.round(cart.total)}</p> : ""}
        {cart.item.length ? (
          <StyledLink
            to='/Checkout'
            onClick={() => {
              closeDrawer();
              dispatch(clearCart());
            }}
          >
            <Button>Checkout</Button>
          </StyledLink>
        ) : (
          ""
        )}
      </Drawer>
    </Div>
  );
};

export default Navbar;
