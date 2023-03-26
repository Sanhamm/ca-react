import { Drawer } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
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
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
    console.log(menuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
    console.log(menuOpen);
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
        >
          <HamburgerNav isInline />
        </Drawer>
      </Div>
    </div>
  );
};

const HamburgerNav = ({ isInline = false }) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const showDrawer = () => {
    setOpen(true);
    console.log(open);
  };

  const onClose = () => {
    setOpen(false);
    console.log(open);
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
                    <CartLength>{cart.item.length}</CartLength>
                  </CartLengthDiv>
                )}
              </Li>
            ),
            key: "cart",
          },
          {
            label: (
              <MobileCart to='/Cart'>
                Cart {cart.item.length === 0 ? "" : cart.item.length}
              </MobileCart>
            ),
            key: "cart",
          },
        ]}
      ></StyledMenu>
      <Drawer
        title='Cart'
        placement='right'
        onClose={onClose}
        open={open}
        bodyStyle={{ backgroundColor: "#fdebd0" }}
        headerStyle={{ backgroundColor: "#fdebd0" }}
      >
        <p>test</p>
      </Drawer>
    </Div>
  );
};

export default Navbar;
