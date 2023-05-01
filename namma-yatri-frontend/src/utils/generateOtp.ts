/**
 * Generates a random 5-digit one-time password (OTP).
 * @returns {number} - A random 5-digit number to be used as an OTP.
 */
export default function generateOtp() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
