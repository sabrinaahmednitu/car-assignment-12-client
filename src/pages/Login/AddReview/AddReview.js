import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Rating from "react-rating";
import './AddReview.css'

const AddReview = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const { user } = useAuth();
  // console.log(user)

  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://tranquil-ocean-72322.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Thanks! For Your Comments");
          reset();
        }
      });
  };
  return (
    <div className="review-form" >
      <h1 className="review-text">You can share your Expreance with us</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input
          className="input-field mt-5 mb-3 w-75 "
          name="customerName"
          value={user?.displayName}
          {...register("customerName", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3 w-75"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3 w-75"
          name="comments"
          placeholder="Type Your Comment"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3 w-75"
          type="number"
          placeholder="Give A Rating (0 to 5)"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-secondary mt-3 px-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
