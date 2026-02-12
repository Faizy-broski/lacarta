// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
      
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">
//           Welcome, {user.name}
//         </h1>

//         <button
//           onClick={handleLogout}
//           className="bg-black text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>
//       </div>

//       {/* ROLE BASED UI */}
//       {user.role === "admin" ? (
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold text-red-600">
//             Admin Dashboard
//           </h2>

//           <div className="grid grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">Total Users</h3>
//               <p className="text-gray-500">Manage all users</p>
//             </div>

//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">Manage Owners</h3>
//               <p className="text-gray-500">Approve or remove owners</p>
//             </div>

//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">System Settings</h3>
//               <p className="text-gray-500">Control platform settings</p>
//             </div>
//           </div>
//         </div>
//       ) : user.role === "owner" ? (
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold text-blue-600">
//             Owner Dashboard
//           </h2>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">My Properties</h3>
//               <p className="text-gray-500">Manage your listings</p>
//             </div>

//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">Bookings</h3>
//               <p className="text-gray-500">View customer bookings</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold text-green-600">
//             User Dashboard
//           </h2>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">Browse Listings</h3>
//               <p className="text-gray-500">Explore available properties</p>
//             </div>

//             <div className="bg-white p-6 rounded shadow">
//               <h3 className="font-bold">My Bookings</h3>
//               <p className="text-gray-500">View your reservations</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
