// import React, { use } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// const Register = () => {
//   const { createUser, setUser, googleLogin } = use(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/home";
//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const photourl = form.photourl.value;
//     const password = form.password.value;
//     console.log({ name, email, photourl, password });
//     const newRegister = { name, email, photourl, password };
//     fetch("http://localhost:3000/Register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newRegister),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("After saving user", data);
//       });

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         // console.log(user);
//         setUser(user);
//         navigate("/home");
//         toast.success("Registration Complete Sucessfully")
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage, errorCode);
//         // ..
//       });
//   };

//   const handleGoogle = (e) => {
//   e.preventDefault();

//   googleLogin()
//     .then((result) => {
//       const user = result.user;

//       const newUser = {
//         name: user.displayName,
//         email: user.email,
//         photourl: user.photoURL,
//         created_at: new Date().toISOString(),
//       };

//       // ✅ FIRST: save to database
//       fetch("http://localhost:3000/Register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("Google User Saved:", data);

//           // ✅ THEN navigate AFTER DB save
//           navigate(from, { replace: true });

//         })
//         .catch((err) => {
//           console.log("DB error:", err);
//         });
//     })
//     .catch((error) => {
//       console.log("Google login error:", error.message);
//     });
// };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe]">
//       {/* Left Text */}
//       <div className="text-center lg:text-left max-w-md order-1">
//         <h1 className="font-bold text-3xl sm:text-4xl">
//           Register Now <br className="hidden sm:block" /> For Free
//         </h1>

//         <p className="pt-4 text-sm sm:text-base">
//           Find your special someone from lakhs{" "}
//           <br className="hidden sm:block" />
//           of verified profiles
//         </p>
//       </div>

//       {/* Right Form */}
//       <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md order-2">
//         <form onSubmit={handleRegister} className="w-full">
//           <h1 className="text-center font-bold text-2xl sm:text-3xl">
//             Create Account
//           </h1>

//           <div className="pt-6">
//             {/* Full Name */}
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 name="name"
//                 type="text"
//                 id="name"
//                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0 focus:border-purple-500 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="name"
//                 className="absolute text-sm bg-transparent focus:bg-transparent text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]
//                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
//               >
//                 Enter Your Full Name
//               </label>
//             </div>

//             {/* Email */}

//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="email"
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]
//                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
//               >
//                 Email Address
//               </label>
//             </div>
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 name="photourl"
//                 type="text"
//                 id="photourl"
//                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="photourl"
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]
//                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
//               >
//                 Enter Your Phot URL
//               </label>
//             </div>
//             {/* Password */}
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 name="password"
//                 type="password"
//                 id="password"
//                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="password"
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]
//                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
//               >
//                 Password
//               </label>
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
//             >
//               Register Now
//             </button>

//             {/* Google Button */}
//             <button
//               onClick={handleGoogle}
//               className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 font-medium rounded-lg text-sm px-6 py-2.5"
//             >
//               <svg width="16" height="16" viewBox="0 0 512 512">
//                 <path
//                   fill="#34a853"
//                   d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                 />
//                 <path
//                   fill="#4285f4"
//                   d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                 />
//                 <path
//                   fill="#fbbc02"
//                   d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                 />
//                 <path
//                   fill="#ea4335"
//                   d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                 />
//               </svg>
//               Continue with Google
//             </button>

//             {/* Login Link */}
//             <p className="text-sm text-center pt-4">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-600 hover:underline">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation } from "react-router";
import { toast } from "react-toastify";



const Register = () => {
  const { createUser, setUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";


  // Register Handler
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photourl = form.photourl.value;
    const password = form.password.value;

    const newRegister = { name, email, photourl, password };
    //Save user to DB
    fetch("http://localhost:3000/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegister),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After saving user", data);
      });

    // Firebase Register
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);

        toast.success("Registration Complete Successfully");

        navigate("/home");
      })
      .catch((error) => {
        toast.error(`${error.code}: ${error.message}`);
      });
  };


  // Google Login
  const handleGoogle = (e) => {
    e.preventDefault();

    googleLogin()
      .then((result) => {
        const user = result.user;

        const newUser = {
          name: user.displayName,
          email: user.email,
          photourl: user.photoURL,
          created_at: new Date().toISOString(),
        };

        fetch("http://localhost:3000/Register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Google User Saved:", data);

            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log("DB error:", err);
          });
      })
      .catch((error) => {
        console.log("Google login error:", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-10">
      {/* Main Card */}
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-emerald-600 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight mb-6">
              Start Your <br /> Journey For Free
            </h1>

            <p className="text-emerald-100 text-base leading-relaxed max-w-md">
              Discover verified profiles and connect with your special someone
              from a pool of lakhs.
            </p>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500 rounded-full opacity-30"></div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400 rounded-full opacity-30"></div>
        </div>

        {/* Right Side Form */}
        <div className="p-7 sm:p-9 md:p-10 lg:p-12">
          {/* Heading */}
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>

            <p className="text-gray-500 mt-2 text-sm">
              Fill in your details to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL
              </label>

              <input
                name="photourl"
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98]"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200"></span>
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogle}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />

                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />

                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />

                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Google
            </button>

            {/* Login Link */}
            <p className="text-sm text-center text-gray-500 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-600 font-bold hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
