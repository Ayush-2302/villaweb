import React, { useState, useEffect } from "react";
import { updateReview } from "../utils/apiSerice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditModal = ({ setEditModalIsOpen, review, fetchallreviews }) => {
  const { list_id } = useParams();
  const [field, setField] = useState({
    review: "",
    rating: "",
  });

  useEffect(() => {
    if (review) {
      setField({
        review: review.review,
        rating: review.rating,
      });
    }
  }, [review]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateReview(review.id, field);
      setField({
        review: "",
        rating: "",
      });
      setEditModalIsOpen(false);
      await fetchallreviews(list_id);

      if (response.success === true) {
        toast.success("Review updated successfully");
      } else {
        toast.error("Somthing went wrong");
      }
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  const onChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Review</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review"
          >
            Review
          </label>
          <input
            name="review"
            onChange={onChange}
            value={field.review}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="review"
            type="text"
            placeholder="Enter review"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            name="rating"
            onChange={onChange}
            value={field.rating}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            placeholder="Rate the service"
            type="number"
            max={5}
            min={1}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setEditModalIsOpen(false)}
            aria-label="Close"
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            aria-label="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
