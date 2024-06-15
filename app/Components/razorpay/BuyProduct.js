"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter  } from 'next/navigation';
import Loading from "@/app/loading";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const BuyProduct = ({ amount }) => {
  const router = useRouter()
  let amT;

  const makePayment = async ({ productId = null }) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
   );
   if (!res) {
      alert("Razropay failed to load!!");
      return;
  }
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);

    const data = await fetch(`http://localhost:3000/api/razorpay?amount=${amount}`);
    const { order } = await data.json();
    console.log(data, order.id);
    const options = {
      key: key,
      name: "VANDANA GAUTAM",
      currency: order.currency,
      amount: amount,
      order_id: order.id,
      description: "Understanding RazorPay Integration",
      // image: logoBase64,
      handler: async function (response) {
        // if (response.length==0) return <Loading/>;
        console.log(response);
        const data = await  fetch("http://localhost:3000/api/paymentverify", {
          method: "POST",
          headers: {
            // Authorization: 'YOUR_AUTH_HERE'
            amount: amount
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        const res = await data.json();
        console.log("response verify==",res)

        if(res?.message=="success"){
          console.log("redirected.......")
          localStorage.setItem("paymentId", response.razorpay_payment_id)
          router.push("/paymentsuccess?paymentid="+response.razorpay_payment_id)
        }
      },
      prefill: {
        name: "vandanagautam",
        email: "vandanagautam503@gmail.com",
        contact: "6307691710",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Buy makePayment={makePayment} amountT={amount} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
