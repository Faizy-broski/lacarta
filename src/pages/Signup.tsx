// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {signupUser } from "../../src/services/authService";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await signupUser(form);

//       localStorage.setItem("token", res.token);
//       localStorage.setItem("user", JSON.stringify(res.user));

//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl">
//             Create Account
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Name */}
//             <div className="space-y-2">
//               <Label>Full Name</Label>
//               <Input
//                 type="text"
//                 placeholder="John Doe"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label>Password</Label>
//               <Input
//                 type="password"
//                 placeholder="••••••••"
//                 value={form.password}
//                 onChange={(e) =>
//                   setForm({ ...form, password: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             {/* Role Select */}
//             <div className="space-y-2">
//               <Label>Role</Label>
//               <Select
//                 defaultValue="user"
//                 onValueChange={(value) =>
//                   setForm({ ...form, role: value })
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select role" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="user">User</SelectItem>
//                   <SelectItem value="owner">Owner</SelectItem>
//                   <SelectItem value="admin">Admin</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <Button type="submit" className="w-full">
//               Sign Up
//             </Button>

//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
