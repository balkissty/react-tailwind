import React from "react";

//images
import image1 from "../assets/female-glasses/1.jpeg";

// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartPage() {
  //product removed notification
  const delNotify = () => toast.error("Product has been removed from cart");

  // product added to cart toast notification
  const susNotify = () =>
    toast.success("Product has been added to cart successfully");

  return (
    <div className="mt-10 px-20">
      <ToastContainer />
      <div className="flex px-20">
        <div className="cart basis-3/4 grid px-8 py-5 mr-4 shadow-xl rounded">
          <h3 className="font-semibold">Cart (2)</h3>
          <div className="mb-10">
            <div className="flex justify-between">
              <div className=" flex">
                <div className="h-50 w-32 m-4 ml-0">
                  <img src={image1} alt="" className="w-full" />
                </div>
                <div className="desc mt-4">
                  <p>Anti-blue light blocking Computer glasses</p>
                </div>
              </div>
              <h3 className="font-bold text-2xl">$14</h3>
            </div>
            <div className="flex justify-between">
              <button
                className="font-semibold text-[#051d4c] cursor-pointer hover:opacity-75"
                onClick={delNotify}
              >
                DELETE
              </button>
              <div className="flex">
                <button className="px-4 py-2 rounded bg-[#051d4c] text-white text-xl hover:opacity-75">
                  -
                </button>
                <p className="mx-4 py-2">1</p>
                <button
                  className="px-4 py-2 rounded bg-[#051d4c] text-white text-xl hover:opacity-75"
                  onClick={susNotify}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between">
              <div className=" flex">
                <div className="h-50 w-32 m-4 ml-0">
                  <img src={image1} alt="" className="w-full" />
                </div>
                <div className="desc mt-4">
                  <p>Anti-blue light blocking Computer glasses</p>
                </div>
              </div>
              <h3 className="font-bold text-2xl">$14</h3>
            </div>
            <div className="flex justify-between">
              <button
                className="font-semibold text-[#051d4c] cursor-pointer hover:opacity-75"
                onClick={delNotify}
              >
                DELETE
              </button>
              <div className="flex">
                <button className="px-4 py-2 rounded bg-[#051d4c] text-white text-xl hover:opacity-75">
                  -
                </button>
                <p className="mx-4 py-2">1</p>
                <button
                  className="px-4 py-2 rounded bg-[#051d4c] text-white text-xl hover:opacity-75"
                  onClick={susNotify}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout basis-1/4 grid shadow-xl sticky rounded px-8 py-5 max-h-40">
          <h3 className="font-semibold">CART SUMMARY</h3>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <h3 className="font-bold text-2xl">$28</h3>
          </div>
          <button className="px-4 py-2 rounded bg-[#051d4c] text-white font-semibold hover:opacity-75">
            CHECKOUT ($28)
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
