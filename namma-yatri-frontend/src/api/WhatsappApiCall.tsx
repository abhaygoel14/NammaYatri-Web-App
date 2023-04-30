import { useEffect } from "react";

const axios = require("axios");

export default function SendOtp({ name, whatsapp, otp }: any) {
  const API_URL = "https://graph.facebook.com/v16.0/113752511701692/messages";
  const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_WHATSAPP_TOKEN;
  //console.log("phone", whatsapp);
  async function sendWhatsAppMessage() {
    try {
      const response = await axios.post(API_URL, {
        messaging_product: "whatsapp",
        to: `91${whatsapp}`,
        text: {
          body: `*${otp}* is your NammaYatri OTP.Welcome *${name}* to the Namma Yatri on an App! This OTP will let you order from Multiple Restaurants in ONE Order & get FREE Delivery*!Tap below to login directly**👇`,
        },
        access_token: AUTH_TOKEN,
      });

      //console.log("hi", response.data);
    } catch (error: any) {
      console.error(error.response.data);
    }
  }

  sendWhatsAppMessage();
}
