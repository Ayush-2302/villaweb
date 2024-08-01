import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  const initialValues = {
    email: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required")
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("/forgot-password", values);
      setEmailSent(true);
    } catch (error) {
      console.error("Password reset request failed", error);
      alert("Failed to send password reset email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/3 p-8 bg-white rounded shadow-md">
        {!emailSent ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2 className="mb-6 text-2xl font-bold">Forgot Password</h2>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-bold">
                    Email:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div>
            <h2 className="mb-6 text-2xl font-bold">Check Your Email</h2>
            <p>
              A password reset link has been sent to your email address. Please follow the instructions to reset your password.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
