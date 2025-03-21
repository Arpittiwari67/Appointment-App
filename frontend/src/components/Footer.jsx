import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*  left-footer */}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus omnis porro, aliquid, cumque reprehenderit
            praesentium voluptates quas facere iste libero excepturi deserunt,
            quia dolorum culpa hic iusto corrupti consectetur itaque?
          </p>
        </div>

        {/*  center-footer */}

        <div>
          <h1  className="text-xl font-medium mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*  right-footer */}

        <div>
          <h1 className="text-xl font-medium mb-5">GET IN TOUCH</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Phone: +1234567890</li>
            <li>Email: doctor@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
            <hr className="mt-5" />
             <p className="py-5 text-sm text-center">©2021 Doctor Appointment. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
