// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card } from "@/components/ui/card";
// import { AlertCircle } from "lucide-react";

// export default function CitizenSignup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     wardNumber: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setError("");

//   //   // Validation
//   //   if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//   //     setError("All fields are required");
//   //     return;
//   //   }

//   //   if (formData.password !== formData.confirmPassword) {
//   //     setError("Passwords do not match");
//   //     return;
//   //   }

//   //   if (formData.password.length < 6) {
//   //     setError("Password must be at least 6 characters");
//   //     return;
//   //   }

//   //   setLoading(true);
//   //   try {
//   //     const API = "http://localhost:5000";

//   //     const response = await fetch('${API}/api/citizen/signup', {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         name: formData.name,
//   //         email: formData.email,
//   //         password: formData.password,
//   //         wardNumber: formData.wardNumber || null,
//   //       }),
//   //     });

//   //     const data = await response.json();

//   //     if (!response.ok) {
//   //       setError(data.message || "Signup failed");
//   //       return;
//   //     }

//   //     // Store token and redirect
//   //     localStorage.setItem("token", data.token);
//   //     localStorage.setItem("userType", "citizen");
//   //     navigate("/citizen-dashboard");
//   //   } catch (err) {
//   //     setError("An error occurred. Please try again.");
//   //     console.error(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// //   const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   setError("");

// //   if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
// //     setError("All fields are required");
// //     return;
// //   }

// //   if (formData.password !== formData.confirmPassword) {
// //     setError("Passwords do not match");
// //     return;
// //   }

// //   if (formData.password.length < 6) {
// //     setError("Password must be at least 6 characters");
// //     return;
// //   }

// //   setLoading(true);
// //   try {
// //     // const API = "http://localhost:5000";

// //     const response = await fetch(`http://localhost:5000/api/citizen/signup`, {

// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         name: formData.name,
// //         email: formData.email,
// //         password: formData.password,
// //         wardNumber: formData.wardNumber || null,
// //       }),
// //     });

// //     const data = await response.json();

// //     if (!response.ok) {
// //       setError(data.message || "Signup failed");
// //       return;
// //     }

// //     localStorage.setItem("token", data.token);
// //     localStorage.setItem("userType", "citizen");
// //     navigate("/citizen-dashboard");
// //   } catch (err) {
// //     console.error(err);
// //     setError("An error occurred. Please try again.");
// //   } finally {
// //     setLoading(false);
// //   }
// // };
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setError("");

//   // Basic validation
//   if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//     setError("All fields are required");
//     return;
//   }

//   if (formData.password !== formData.confirmPassword) {
//     setError("Passwords do not match");
//     return;
//   }

//   if (formData.password.length < 6) {
//     setError("Password must be at least 6 characters");
//     return;
//   }

//   setLoading(true);

//   const response = await fetch("http://localhost:5000/api/citizen/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//       wardNumber: formData.wardNumber || null,
//     }),
//   });




//   const data = await response.json();

//   if (!response.ok) {
//     setError(data.message || "Signup failed");
//     setLoading(false);
//     return;
//   }

//   // Success
//   localStorage.setItem("token", data.token);
//   localStorage.setItem("userType", "citizen");
//   navigate("/citizen-dashboard");

//   setLoading(false);
// };



//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="mb-8">
//           <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
//             <span className="text-sm text-primary font-semibold">← Back to Home</span>
//           </Link>
//           <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
//           <p className="text-slate-600 mt-2">Sign up to start reporting issues in your community</p>
//         </div>

//         <Card className="border-0 shadow-lg">
//           <div className="p-8">
//             {error && (
//               <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start gap-3">
//                 <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
//                 <p className="text-sm text-destructive">{error}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name */}
//               <div>
//                 <Label htmlFor="name" className="text-sm font-medium">
//                   Full Name
//                 </Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-2"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <Label htmlFor="email" className="text-sm font-medium">
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-2"
//                 />
//               </div>

//               {/* Ward Number (Optional) */}
//               <div>
//                 <Label htmlFor="wardNumber" className="text-sm font-medium">
//                   Ward Number (Optional)
//                 </Label>
//                 <Input
//                   id="wardNumber"
//                   name="wardNumber"
//                   type="text"
//                   placeholder="e.g., Ward 5"
//                   value={formData.wardNumber}
//                   onChange={handleChange}
//                   className="mt-2"
//                 />
//                 <p className="text-xs text-slate-500 mt-1">You can update this later or let us auto-detect</p>
//               </div>

//               {/* Password */}
//               <div>
//                 <Label htmlFor="password" className="text-sm font-medium">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder="Minimum 6 characters"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-2"
//                 />
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <Label htmlFor="confirmPassword" className="text-sm font-medium">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="mt-2"
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button 
//                 type="submit" 
//                 className="w-full mt-6 font-semibold h-10"
//                 disabled={loading}
//               >
//                 {loading ? "Creating Account..." : "Create Account"}
//               </Button>
//             </form>

//             {/* Login Link */}
//             <div className="mt-6 text-center">
//               <p className="text-sm text-slate-600">
//                 Already have an account?{" "}
//                 <Link to="/citizen-login" className="text-primary font-semibold hover:underline">
//                   Log in
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </Card>

//         {/* Councillor Login */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-slate-600">
//             Are you a councillor?{" "}
//             <Link to="/councillor-login" className="text-primary font-semibold hover:underline">
//               Log in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function CitizenSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    wardNumber: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword, wardNumber } = formData;

    // 🔐 Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/citizen/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          wardNumber: wardNumber || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // ✅ Success
      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", "citizen");
      navigate("/citizen-dashboard");

    } catch (err: any) {
      setError(err.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm text-primary font-semibold">← Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-slate-600 mt-2">
            Sign up to start reporting issues in your community
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <div className="p-8">

            {error && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
              <InputField label="Ward Number (Optional)" name="wardNumber" value={formData.wardNumber} onChange={handleChange} />
              <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
              <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />

              <Button type="submit" className="w-full h-10" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <Link to="/citizen-login" className="text-primary font-semibold">
                Log in
              </Link>
            </div>
          </div>
        </Card>

        <div className="mt-6 text-center text-sm">
          Are you a councillor?{" "}
          <Link to="/councillor-login" className="text-primary font-semibold">
            Log in here
          </Link>
        </div>

      </div>
    </div>
  );
}

/* 🔁 Reusable Input Field */
function InputField({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2"
      />
    </div>
  );
}

