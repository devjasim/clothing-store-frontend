
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Link from 'next/link';

// Components
import CartItem from '../components/CartItem'

// Actions
import { addToCart, removeFromCart} from '../../redux/actions/product';
import { PageLayout } from '../layouts';

const CartScreen = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector((state: any) => state.products)
  console.log("CART", cartItems);
  const qtyChangeHandler = (id: string, qty: string) => {
    dispatch(addToCart(id, qty))
  }

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item?.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + parseInt(item?.price || '0') * Number(item?.qty), 0)
      .toFixed(2)
  }

    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link href="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item._id}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={() => removeFromCartHandler(item._id)}
                />
              ))
            )}
          </div>

          <div className="mt-[3.7rem] cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>৳ {getCartSubTotal()}</p>
            </div>
            <div>
              <button>
                <Link href="/checkout">
                    Proceed To Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

CartScreen.getLayout = (page) => (
    <PageLayout>
      <div>{page}</div>
    </PageLayout>
  );
  

export default CartScreen
