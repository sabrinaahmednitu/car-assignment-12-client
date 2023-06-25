import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const CarDetails = () => {
  const [carDetails, setCarDetails] = useState({});
  const { carId } = useParams();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.productName = carDetails?.name;
    data.description = carDetails?.description;
    data.price = carDetails?.price;
    data.img = carDetails?.img;

    fetch('https://carzone-server-4ww6.onrender.com/addOrders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Congrats! Order Placed Successfully');
        }
      });
  };

  useEffect(() => {
    fetch(`https://carzone-server-4ww6.onrender.com/singleCar/${carId}`, {
       mode: 'no-cors',
    }
    )
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data[0]);
      });
  }, []);

  return (
    <div className="container">
      <h2 className=" mt-5 text-info ">You have choose: {carDetails?.name}</h2>
      <h4 className=" mb-5">
        For purchase your car fill up the form and comform your booking
      </h4>
      <div className="container row">
        <div className="col-md-6  shadow-lg text-center">
          <img style={{ width: '100%' }} src={carDetails?.img} alt="" />
          <h5 className="w-100 text-info ">{carDetails?.name}</h5>
          <p className="w-100  ">{carDetails?.description}</p>
          <p className="w-100 text-info  fw-bold">${carDetails?.price}</p>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('Current address', { required: true })}
              defaultValue=""
              placeholder="Your Address"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register('Phone number', { required: true })}
              defaultValue=""
              placeholder="phone"
              className="p-2 m-2"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              type="number"
              {...register('your age', { required: true })}
              defaultValue=""
              placeholder="age"
              className="p-2 m-2"
              className="p-2 m-2 w-100"
            />
            <br />
            <br />

            {errors.exampleRequired && <span> Field is required</span>}

            <input
              type="submit"
              value="conform booking"
              className="btn btn-info ms-2 w-75 fw-bold text-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
