"use client"
import { CartContainer } from "@/styles/CartStyle"
import { useSelector } from "react-redux"
import CartItems from "./CartItems"
import { useEffect, useState } from "react"
import { Link } from "@/navigation"
import useAuth from "@/lib/Hooks/useAuth"

const Cartleft = () => {
    const cartItems = useSelector(state => state.cart.cartItem);
    const [isMounted, setIsMounted] = useState(false);
    const { currentUser } = useAuth();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CartContainer>
                <div className="row m-0 p-0">
                    {currentUser ? cartItems ? (cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="col-12 p-0 m-0 border-bottom py-4">
                                <CartItems key={item.id} item={item} />
                            </div>
                        ))
                    ) : (<h1>Your Cart is Empty. <Link href="/shop">Shop Now</Link></h1>))
                        : (<h1>Your Cart is Empty. <Link>Shop Now</Link></h1>) :
                        (<h1><Link href="/login">Login</Link> to see your cart</h1>)
                    }
                </div>
            </CartContainer>
        </>
    )
}

export default Cartleft