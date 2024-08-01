import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import httpService from "../utils/httpService";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  // const code = Math.floor(100000 + Math.random() * 900000).toString();
  // console.log(code);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await httpService.post("/user/login", values);
      alert("Login successful!");
      resetForm();
      // navigate("/");
      console.log(response);
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/3 p-8 bg-white rounded shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="mb-6 text-2xl font-bold">Login</h2>
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
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
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
              <Link
                to="/forgotpassword"
                className="block text-sm text-center text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
