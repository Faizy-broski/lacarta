// import { useState } from "react";
// import { loginUser } from "../../src/services/authService";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
// // 
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await loginUser(form);

//       localStorage.setItem("token", res.token);
//       localStorage.setItem("user", JSON.stringify(res.user));

//       // Redirect based on role
//       if (res.user.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-96 space-y-4 border p-6 rounded-xl shadow"
//       >
//         <h2 className="text-xl font-bold text-center">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />

//         <button className="w-full bg-black text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
