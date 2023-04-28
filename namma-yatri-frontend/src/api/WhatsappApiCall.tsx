import { useEffect } from "react";

const axios = require("axios");

export default function SendOtp() {
  const API_URL = "https://graph.facebook.com/v16.0/115740761489058/messages";
  const AUTH_TOKEN =
    "EAACslzwIEzQBADU2WbxXzWd95MyEajkJ24hIVpVNa7i0OVWfZAUY7RTnZCu7cxVwtf3aKTIwwey7Q9gkK7ZCcLQwBi2ZBzoPfQg1qY1TcZC3BzjUBvg65UwFk2aXsihYZB2fKQXXGM7BguRKL2DmZAaolZBG8ZAkGpoAVYKZBqIedJZCrC06UsTx6OA6zdqmavxYFRP5wEa3ZCvArgZDZD";

  async function sendWhatsAppMessage() {
    try {
      const response = await axios.post(API_URL, {
        messaging_product: "whatsapp",
        to: "919819100896",
        text: {
          body: "2324 is your NammaYatri OTP.Welcome to the Namma Yatri on an App! This OTP will let you order from Multiple Restaurants in ONE Order & get FREE Delivery*!Tap below to login directly**👇",
        },
        access_token: AUTH_TOKEN,
      });

      console.log("hi", response.data);
    } catch (error: any) {
      console.error(error.response.data);
    }
  }

  sendWhatsAppMessage();
}
