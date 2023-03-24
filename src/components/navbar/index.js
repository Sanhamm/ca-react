import { Drawer } from "antd";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BurgeMenu, Div, StyledMenu } from "./style";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";
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
        <BurgeMenu onClick={showMenu} />
      </Div>
      <Div>
        <Drawer
          bodyStyle={{ backgroundColor: "#eeeeee" }}
          headerStyle={{ backgroundColor: "#eeeeee" }}
          placement='left'
          title='menu'
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
  console.log(cart);

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
      <StyledMenu
        mode={isInline ? "inline" : "horizontal"}
        items={[
          {
            label: <Link to='/'>Home</Link>,
            key: "home",
          },
          {
            label: <Link to='/Contact'>Contact Us</Link>,
            key: "contact",
          },
          {
            label: (
              <li>
                <AiOutlineShoppingCart onClick={showDrawer} />
                {cart.item.length}
              </li>
            ),
            key: "cart",
          },
        ]}
      ></StyledMenu>
      <Drawer title='Cart' placement='right' onClose={onClose} open={open}>
        <p>test</p>
      </Drawer>
    </Div>
  );
};

export default Navbar;
