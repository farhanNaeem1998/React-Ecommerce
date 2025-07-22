import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer w-full bg-black text-white py-6 mt-4">
        <div className="flex flex-col lg:flex-row lg:mx-50 lg:items-start lg:justify-between lg:pt-4 gap-3 lg:gap-6 px-5">
          {/* Section 1 */}
          <div className="flex flex-col justify-start items-start gap-2 lg:h-55">
            <div className="font-bold text-lg">Exclusive</div>
            <div>Subscribe</div>
            <div>Get 10% off your first order</div>
            <div></div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col justify-start items-start gap-2 lg:h-55">
            <div className="font-bold text-lg">Support</div>
            <div>59 Bank Rd, Saddar, Rawalpindi, 46000.</div>
            <div>Email: farhan.khan1836@gmail.com</div>
            <div>Phone: +92335-8558772</div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col justify-start items-start gap-2 lg:h-55">
            <div className="font-bold text-lg">Account</div>
            <div>My Account</div>
            <div>Login / Register</div>
            <div>Cart</div>
            <div>Wishlist</div>
            <div>Shop</div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col justify-start items-start gap-2 lg:h-55">
            <div className="font-bold text-lg">Quick Link</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>FAQ</div>
            <div>Contact</div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col justify-start items-start gap-2 lg:h-55">
            <div className="font-bold text-lg">Download App</div>
            <div className="text-sm text-gray-400">Coming soon on:</div>
            <div className="text-sm">Play Store</div>
            <div className="text-sm">App Store</div>
          </div>
        </div>
        <div className="mt-4 pt-4 text-center">
          <div className="text-sm">
            © 2025 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};
