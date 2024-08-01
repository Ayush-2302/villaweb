import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import httpService from "../utils/httpService";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await httpService.post(`/user/signup`, values);
      console.log(response);
      alert("user created successfully");
      resetForm();

      navigate("/login");

      // setVerificationSent(true);
      // setEmail(values.email);
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  const sendOtp = async () => {
    try {
      await httpService.post("/send-otp", { email });
      setOtpSent(true);
    } catch (error) {
      console.error("Failed to send OTP", error);
    }
  };

  const verifyOtp = async (code) => {
    try {
      await httpService.post("/verify", { verificationCode: code });
      alert("Email verified successfully!");
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2  p-8 bg-white rounded shadow-md">
        {!verificationSent ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <h2 className="mb-6 text-2xl font-bold">Sign Up</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-bold">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <label htmlFor="email" className="block mb-2 text-sm font-bold">
                Email
              </label>
              <div className="mb-4 flex items-center">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
              {/* <div className="mb-4">
                <label htmlFor="otp" className="block mb-2 text-sm font-bold">
                  Enter OTP Here
                </label>
                <div className="flex items-center">
                  <Field
                    type="number"
                    id="otp"
                    name="otp"
                    className="w-3/4 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={sendOtp}
                    className=" p-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Verify your email
                  </button>
                </div>
               
              </div> */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            </Form>
          </Formik>
        ) : (
          <div>
            <h2 className="mb-6 text-2xl font-bold">Verify Your Email</h2>
            {otpSent ? (
              <>
                <p className="mb-4">
                  We've sent a verification email to your address. Please enter
                  the code below:
                </p>
                <input
                  type="text"
                  id="verificationCode"
                  className="w-full p-2 mb-4 border rounded"
                  placeholder="Verification Code"
                />
                <button
                  onClick={() =>
                    verifyOtp(document.getElementById("verificationCode").value)
                  }
                  className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-700"
                >
                  Verify
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
