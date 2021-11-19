import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    return (
        <div>
            <h1 className="text-info mt-5" >Contact With Us</h1>
            <form  className="mt-5" >
            <input
              placeholder="Your First Name"
              className="p-2 m-2 w-50"
             />
            <input
              placeholder="Your Last name"
              className="p-2 m-2"
              className="p-2 m-2 w-50"
            />
            <br />
            <input
              type="number"
              placeholder="Your Email"
              className="p-2 m-2"
              className="p-2 m-2 w-50"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="p-2 m-2"
              className="p-2 m-2 w-50"
            />
            <br />
            <br />

            <input
              type="submit"
              value="Submit"
              className="btn btn-info ms-2 w-50 fw-bold text-white "
            />
          </form>
        </div>
    );
};

export default Contact;