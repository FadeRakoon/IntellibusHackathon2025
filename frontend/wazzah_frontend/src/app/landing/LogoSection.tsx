export const LogoSection = () => {
  return (
    <section className="relative p-10 mb-12 w-full max-w-screen-xl bg-black shadow-sm rounded-[30px] max-md:p-8 max-md:mb-8 max-sm:p-6 max-sm:mb-6 max-sm:rounded-3xl">
      <div className="absolute left-[34px] top-[47px] max-md:relative max-md:top-auto max-md:left-auto max-md:mb-4 max-md:text-center">
        <img
          src="https://placehold.co/126x126"
          alt="Logo Icon"
          className="rounded-full h-[126px] w-[126px] max-sm:w-20 max-sm:h-20"
        />
      </div>
      <div className="mt-16">
        <img
          src="WAZZAH_Logo.png"
          alt="WAZZAH!"
          className="mx-auto w-full h-auto max-w-[993px] max-sm:max-w-full"
        />
      </div>
    </section>
  );
};
