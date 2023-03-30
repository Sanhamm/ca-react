import Button from "../Button";
import {
  CheckCheckout,
  CheckoutButtonDiv,
  CheckoutDiv,
  ShoppingCheckout,
} from "./style";
import { StyledLink } from "../navbar/style";

const Checkout = () => {
  return (
    <>
      <CheckoutDiv>
        <ShoppingCheckout />
        <h1>Thank you for shopping at Shoppit</h1>
        <CheckCheckout />
      </CheckoutDiv>
      <CheckoutButtonDiv>
        <Button>
          <StyledLink to='/'>Go back to the store</StyledLink>
        </Button>
      </CheckoutButtonDiv>
    </>
  );
};

export default Checkout;
