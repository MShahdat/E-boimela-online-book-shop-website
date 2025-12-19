// src/Components/Checkout.jsx
import React, { useMemo, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { dataContext } from "../context/Context";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaMinus } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";


const Checkout = () => {

  const [name,
    open,
    setOpen,
    video,
    setVideo,
    payment,
    setPayment,
    cartOpen,
    setCartOpen,
    addToCart,
    cart,
    removeCart,
    quantityIncrement,
    quantityDecrement,
    subtot,
    setCart,
  ] = useContext(dataContext)

  const navigate = useNavigate();


  const [accountId, setAccountId] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [acceptsEbooksOnly, setAcceptsEbooksOnly] = useState(false);
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [promo, setPromo] = useState(false)



  const discount = useMemo(() => {
    if (!promo || cart.length === 0) return 0
    return subtot * 0.3;
  }, [promo, subtot, cart.length]);

  const vat = ((subtot - discount) * 0.15)

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode === 'shahdat' && cart.length >= 1) {
      setPromo(true)
      setPromoCode('')
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      setPromo(false);
    }
  }, [cart.length])

  const validate = () => {
    const next = {};
    if (!accountId.trim()) next.accountId = "Account ID is required.";
    if (!acceptsEbooksOnly) next.ebooks = "Please acknowledge you are purchasing ebooks.";
    if (!acceptsTerms) next.terms = "You must agree to the Terms of Service and Privacy Policy.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handlePurchase = () => {
    if (!validate()){
      return
    }
    toast.success('Congratulations! your purches successfully ok!')
    setCart([])
    navigate('/')
  };

  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <div className=" max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <div className="text-right">
              <p className="text-sm dark:text-white text-gray-500">Total</p>
              <p className="text-2xl font-bold dark:text-white text-blue-900 flex items-center"><span><TbCurrencyTaka /></span> {(subtot + vat - discount).toFixed(2)}</p>
            </div>
          </div>

          {/* Your Books */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Your Books</h2>

            {cart.length === 0 ? (
              <div className="rounded-lg border dark:text-white/70 border-gray-200 p-6 text-center text-gray-600">
                Your cart is empty.{" "}
                <Link to="/" className="text-blue-600 dark:text-orange-600 hover:underline font-medium">
                  Browse books
                </Link>
              </div>
            ) : (
              <>
                {/* Items grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 space-y-8 gap-2">
                  {cart.map((item) => (
                    <div key={item.id} className="relative border p-1 border-white/30">
                      <div className="w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-36 object-cover rounded-md shadow-sm"
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-semibold line-clamp-2">{item.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-[16px] text-green-600 font-bold mt-1 flex items-center"><span><TbCurrencyTaka /></span>{(item.price.toFixed(2))} </p>
                          <span className="mt-0.5">(x{item.quantity})</span>
                        </div>
                      </div>

                      {/* Delete icon */}
                      <button
                        onClick={() => {
                          removeCart(item)

                        }}
                        className="absolute top-0.5 right-0.5 p-1 rounded-full bg-white shadow hover:bg-gray-100"
                      >
                        <RxCross2 className="text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Summary card */}
                <div className="mt-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    <span className="text-md font-semibold dark:text-white/80 text-gray-700">
                      Subtotal
                    </span>
                    <span className="text-md font-bold flex items-center"><span><TbCurrencyTaka /></span>{subtot.toFixed(2)}</span>
                  </div>

                  {
                    cart.length >= 1 &&
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                      <span className="text-[16px] dark:text-white/80 font-semibold text-gray-700">
                        Vat (15%)
                      </span>
                      <span className="text-md font-bold flex items-center"><span><TbCurrencyTaka /></span>{vat.toFixed(2)}</span>

                    </div>
                  }

                  {(discount > 0 && cart.length >= 1) && (
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                      <span className="text-sm text-green-600 font-semibold">Promo Discount</span>
                      <span className="text-sm text-red-600 text-[16px] font-bold flex items-center gap-1.5"><span><FaMinus className="text-[12px]" /></span>{(discount.toFixed(2))}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-base font-semibold">Total</span>
                    <span className="text-base font-bold text-green-600 flex items-center"><span><TbCurrencyTaka /></span>{(subtot + vat - discount).toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </section>

          {/* Account Information */}
          <section className="mt-8">
            <h3 className="text-base font-bold mb-3">Account Information</h3>

            {/* Account ID */}
            <label className="block text-sm font-medium dark:text-white/80 text-gray-700 mb-1">
              Account ID{" "}
              <span className="inline-block align-middle text-gray-400">
                <AiOutlineInfoCircle title="We use this to deliver your ebooks to your account." />
              </span>
            </label>
            <input
              type="text"
              className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 ${errors.accountId ? "border-red-400 ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
              placeholder="Enter your Account ID (e.g., AC123456)"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />
            <div className="mt-1">
              <button
                onClick={() =>{
                  setVideo(true)
                }}
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Learn how to find your account ID
              </button>
            </div>

            {/* Promo code */}
            <form onSubmit={handleApplyPromo} className="mt-4 flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Promo code (optional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                type="submit"

                className={`rounded-lg bg-blue-800 text-white px-4 py-2 text-sm font-semibold flex items-center gap-0.5 ${discount > 0 ? 'cursor-not-allowed' : ''}`}
              >
                {discount > 0 ? <IoIosCheckmarkCircle /> : ''}
                {discount > 0 ? 'Applied' : 'Apply'}
              </button>
            </form>
          </section>

          {/* Payment Method */}
          <section className="mt-8">
            <h3 className="text-base font-semibold mb-3">Payment Method</h3>

            <div className="rounded-lg border border-blue-300 bg-blue-50">
              <label className="flex items-start gap-3 px-4 py-4 cursor-pointer">
                <input type="radio" name="pay" defaultChecked className="mt-2" />
                <div>
                  <p className="text-black font-semibold">Local Payment</p>
                  <p className="text-sm dark:text-black/90 text-gray-600">
                    bKash, Nagad, Rocket, Credit, and Debit cards
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* Acknowledgements */}
          <section className="mt-6 space-y-3">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={acceptsEbooksOnly}
                onChange={(e) => setAcceptsEbooksOnly(e.target.checked)}
              />
              <span className="text-sm dark:text-white/80 text-gray-700 font-semibold">
                I understand that I am purchasing ebooks, not physical books.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={acceptsTerms}
                onChange={(e) => setAcceptsTerms(e.target.checked)}
              />
              <span className="text-sm dark:text-white/80 text-gray-700 font-semibold">
                I agree to the{" "}
                <Link
                  to="/terms&conditions"
      
                  className="text-blue-600 dark:text-orange-600 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/policy"
                  
                  className="text-blue-600 dark:text-orange-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* Inline errors */}
            <div className="mt-4 space-y-2">
              {errors.accountId && (
                <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-3 py-2 rounded">
                  {errors.accountId}
                </p>
              )}
              {errors.ebooks && (
                <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-3 py-2 rounded">
                  {errors.ebooks}
                </p>
              )}
              {errors.terms && (
                <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-3 py-2 rounded">
                  {errors.terms}
                </p>
              )}
            </div>
          </section>

          {/* Purchase button */}
          <div className="mt-6">
            <button
              onClick={handlePurchase}
              disabled={cart.length === 0}
              className={`w-full rounded-lg ${cart.length > 0 ? 'bg-black dark:bg-white dark:text-black' : 'bg-black/80 dark:bg-white cursor-not-allowed'} text-white font-semibold py-3`}
            >
              Complete Purchase 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
