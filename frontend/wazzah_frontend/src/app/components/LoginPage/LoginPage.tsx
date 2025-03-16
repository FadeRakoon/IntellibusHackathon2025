"use client";

import React from "react";
import { FloatingTestimonial } from "./FloatingTestimonial";
import { LoginForm } from "./LoginForm";

const LoginPage: React.FC = () => {
  const handleLogin = async (username: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Add your actual login logic here
    console.log("Logging in with:", username);

    // If login fails, throw an error to be caught by the form
    // throw new Error("Invalid credentials");
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="flex overflow-hidden relative flex-col justify-center items-center p-8 min-h-screen bg-white max-sm:p-4">
        <div className="absolute inset-0 z-0">
          <FloatingTestimonial
            text="Amazing service!"
            className="text-3xl bg-rose-100"
            animationDuration="20s"
          />
          <FloatingTestimonial
            text="Best platform ever!"
            className="text-4xl bg-sky-100 left-[30%]"
            animationDuration="15s"
          />
          <FloatingTestimonial
            text="5 star experience!"
            className="text-4xl bg-green-100 right-[20%]"
            animationDuration="25s"
          />
          <FloatingTestimonial
            text="Best hackathon ever!"
            className="text-3xl bg-pink-100 left-[15%]"
            animationDuration="22s"
          />
          <FloatingTestimonial
            text="Glad to have met new people!"
            className="text-3xl bg-purple-100 right-[35%]"
            animationDuration="18s"
          />
          <FloatingTestimonial
            text="10/10 would recommend!"
            className="text-4xl bg-emerald-50 left-[45%]"
            animationDuration="25s"
          />
        </div>

        <section className="flex relative flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-xl aspect-[16/9] max-w-[600px] z-[1] max-md:p-8 max-md:aspect-[4/3] max-md:max-w-[500px] max-sm:p-6 max-sm:mx-auto max-sm:my-0 max-sm:aspect-[1/1] max-sm:max-w-[95%]">
          <header className="flex gap-12 justify-center items-center mb-8 max-sm:flex-col max-sm:gap-8">
            <h1 className="px-12 py-8 text-7xl tracking-wider leading-none text-white bg-black rounded-3xl transition-transform duration-[0.3s] ease-[ease] max-sm:px-6 max-sm:py-4 max-sm:text-4xl">
              WAZZAH!
            </h1>
          </header>

          <h2 className="mb-8 text-3xl font-semibold text-center text-zinc-800">
            Welcome Back
          </h2>

          <LoginForm onLogin={handleLogin} />
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
