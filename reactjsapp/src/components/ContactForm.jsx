import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contactForm } from "../utils/apiSerice";
import { toast } from "react-toastify";

const ContactForm = () => {
  const initialValues = { name: "", email: "", message: "" };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleform = async (values, { setSubmitting ,resetForm}) => {
    const response = await contactForm(values);
    if (response.success === true) {
      setSubmitting(false);
      toast.success("we will contact u soon!");
      resetForm()
    } else {
      toast.error("somthing went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 md:w-1/2 w-full mx-auto my-10">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h1>
        <Formik
          onSubmit={handleform}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  rows="5"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 mt-1"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
