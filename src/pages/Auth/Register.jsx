import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
          <form>
            <h5 className="text-xl font-semibold text-heading mb-6">
              Register in our platform
            </h5>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="example@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Enter Your Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="enter a strong password"
              />
            </div>

            <div className="flex items-start my-6">
              <div className="flex items-center">
                <input
                  id="checkbox-remember"
                  type="checkbox"
                  className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                />
                <label
                  htmlFor="checkbox-remember"
                  className="ms-2 text-sm font-medium text-heading"
                >
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="button"
              className="text-black bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
            >
              Register Now
            </button>

            <div className="text-sm font-medium text-body">
             Already have an account?{" "}
              <Link to="/login">
                <a className="text-fg-brand hover:underline">Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
