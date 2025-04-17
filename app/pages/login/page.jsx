'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (session && session.user && session.user.email) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response.ok) {
        alert("Logged in successfully");
      } else {
        alert(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h1>
  
      {session ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
  
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link href="/pages/register" className="text-blue-600 hover:underline font-medium">
                Register
              </Link>
            </p>
          </form>
  
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
  
          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.996.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            Sign in with GitHub
          </button>
        </>
      )}
    </div>
  </main>
  
  );
}

