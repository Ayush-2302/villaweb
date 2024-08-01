import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addReview, getReviewsOfVilla } from "../utils/apiSerice";
import { useParams } from "react-router-dom";

const ReviewForm = ({ setModalIsOpen, fetchallreviews }) => {
  const { list_id } = useParams();
  const initialValues = { review: "", rating: "" };

  const validationSchema = Yup.object({
    review: Yup.string().required("Review is required"),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5"),
  });
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await addReview(list_id, values);
      await fetchallreviews(list_id);
      if (response.success === true) {
        toast.success("Review added successfully");
      } else {
        toast.error("Somthing went wrong");
      }
      resetForm();
      setModalIsOpen(false);
    } catch (error) {
      console.error("Failed to submit review", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="review"
            >
              Review
            </label>
            <Field
              name="review"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="review"
              type="text"
              placeholder="Enter review"
            />
            <ErrorMessage
              name="review"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <Field
              name="rating"
              as="input"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              placeholder="Rate the service"
              type="number"
              max={5}
              min={1}
            />
            <ErrorMessage
              name="rating"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ReviewForm;
