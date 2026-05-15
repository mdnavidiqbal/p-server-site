
// import React, { use } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../provider/AuthProvider";
// import { toast } from "react-toastify";
// const Login = () => {
//   const { signIn, googleLogin } = use(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/home";

//   // =========================
//   // EMAIL LOGIN
//   // =========================
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       // 1️⃣ Firebase sign in
//       const result = await signIn(email, password);
//       const user = result.user;

//       console.log("Firebase User:", user);

//       // 2️⃣ IMPORTANT: Firebase ID TOKEN নাও
//       const token = await user.getIdToken();

//       // 3️⃣ Save token (this is what backend expects)
//       localStorage.setItem("accessToken", token);
//       toast.success("Sucessfully Login")
//       // 4️⃣ Navigate
//       navigate(from, { replace: true });
//     } catch (error) {
//       toast.error(error.message)
//     }
//   };

//   // =========================
//   // GOOGLE LOGIN
//   // =========================
//   const handleGoogle = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await googleLogin();
//       const user = result.user;
     
//       console.log("Google User:", user);

//       // 1️⃣ Firebase ID token
//       const token = await user.getIdToken();
//       console.log(token);

//       // 2️⃣ Save token
//       localStorage.setItem("accessToken", token);
//       toast.success("Sucessfully Login")
//       // 3️⃣ Navigate
//       navigate(from, { replace: true });
//     } catch (error) {
//       toast.error(error.message)
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe]">
//       {/* Left Text */}
//       <div className="text-center lg:text-left max-w-md order-1">
//         <h1 className="font-bold text-3xl sm:text-4xl">Login Now !</h1>
//         <p className="pt-4 text-sm sm:text-base">
//           Find your special someone from lakhs{" "}
//           <br className="hidden sm:block" />
//           of verified profiles
//         </p>
//       </div>

//       {/* Form */}
//       <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md order-2">
//         <form onSubmit={handleLogin}>
//           <h1 className="text-center font-bold text-3xl">Login Account</h1>

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border-b p-2 mt-6 outline-none"
//             required
//           />

//           {/* Password */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border-b p-2 mt-6 outline-none"
//             required
//           />

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full mt-6 bg-purple-500 text-white py-2 rounded"
//           >
//             Login
//           </button>

//           {/* Google Login */}
//           <button
//             onClick={handleGoogle}
//             className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 font-medium rounded-lg text-sm px-6 py-2.5"
//           >
//             <svg width="16" height="16" viewBox="0 0 512 512">
//               <path
//                 fill="#34a853"
//                 d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//               />
//               <path
//                 fill="#4285f4"
//                 d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//               />
//               <path
//                 fill="#fbbc02"
//                 d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//               />
//               <path
//                 fill="#ea4335"
//                 d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//               />
//             </svg>
//             Continue with Google
//           </button>

//           <p className="text-sm text-center pt-4">
//             Don't have an account?{" "}
//             <Link to="/registration" className="text-blue-600">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  // Logic remains untouched
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("accessToken", token);
      toast.success("Successfully Logged In");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await googleLogin();
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("accessToken", token);
      toast.success("Successfully Logged In");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-12">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Left Side: Aesthetic Info */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-emerald-600 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Welcome <br /> Back!
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Find your special someone from lakhs of verified profiles. Your journey to a beautiful beginning starts here.
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500 rounded-full opacity-20"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400 rounded-full opacity-20"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 sm:p-12 md:p-16">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Login Account</h2>
            <p className="text-gray-500 mt-2">Enter your details to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs text-emerald-600 hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-100 transition-all transform active:scale-[0.98]"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogle}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Google
            </button>

            {/* Footer Text */}
            <p className="text-sm text-center text-gray-500 mt-8">
              Don't have an account?{" "}
              <Link to="/registration" className="text-emerald-600 font-bold hover:underline">
                Sign Up Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

