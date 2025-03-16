"use client";
import * as React from "react";
import FloatingTestimonial from "./FloatingTestimonial";
import FormInput from "./FormInput";
import DividerWithText from "./DividerWithText";

function InputDesign() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center p-8 min-h-screen bg-white font-inter">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="absolute inset-0 z-0">
        <FloatingTestimonial
          text="Amazing service!"
          className="text-3xl bg-rose-100 animate-[float_20s_infinite_linear]"
        />
        <FloatingTestimonial
          text="Best platform ever!"
          className="text-4xl bg-sky-100 animate-[float_15s_infinite_linear] left-[30%]"
        />
        <FloatingTestimonial
          text="5 star experience!"
          className="text-4xl bg-green-100 animate-[float_25s_infinite_linear] right-[20%]"
        />
        <FloatingTestimonial
          text="Best hackathon ever!"
          className="text-3xl bg-pink-100 animate-[float_22s_infinite_linear] left-[15%]"
        />
        <FloatingTestimonial
          text="Glad to have met new people!"
          className="text-3xl bg-purple-100 animate-[float_18s_infinite_linear] right-[35%]"
        />
        <FloatingTestimonial
          text="10/10 would recommend!"
          className="text-4xl bg-emerald-50 animate-[float_25s_infinite_linear] left-[45%]"
        />
      </div>

      <article className="relative p-12 w-full bg-white rounded-2xl shadow-xl max-w-[800px] z-[1] max-md:p-10 max-md:max-w-[700px] max-sm:p-6 max-sm:mx-4 max-sm:my-0 max-sm:max-w-full">
        <header className="flex gap-12 justify-center items-center mb-16 max-sm:flex-col max-sm:gap-8">
          <h1 className="px-12 py-8 text-7xl tracking-wider leading-none text-white bg-black rounded-3xl transition-transform duration-[0.3s] ease-[ease] max-sm:px-6 max-sm:py-4 max-sm:text-4xl">
            WAZZAH!
          </h1>
        </header>

        <h2 className="pb-0.5 mb-8 text-3xl font-bold text-center text-zinc-800">
          Enter your Information
        </h2>

        <form className="flex flex-col gap-6">
          <FormInput type="text" placeholder="New Username" icon="ti ti-user" />
          <FormInput
            type="password"
            placeholder="New Password"
            icon="ti ti-key"
          />
          <FormInput
            type="email"
            placeholder="Enter Your Email"
            icon="ti ti-mail"
          />

          <button
            type="submit"
            className="py-3 w-full font-medium text-white bg-blue-600 rounded-lg transition-all cursor-pointer duration-300 ease-[ease] hover:bg-blue-700"
          >
            Register
          </button>

          <DividerWithText text="or" />

          <button
            type="button"
            className="flex gap-3 justify-center items-center py-4 w-full font-medium text-gray-700 bg-white rounded-lg border border-solid transition-all cursor-pointer duration-300 ease-[ease] hover:bg-gray-50"
          >
            <i className="ti ti-brand-google text-xl text-red-500" />
            <span>Continue with Google</span>
          </button>
        </form>
      </article>
    </section>
  );
}

export default InputDesign;
