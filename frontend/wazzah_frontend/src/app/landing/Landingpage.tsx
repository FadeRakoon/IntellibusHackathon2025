"use client";

import { AnimatedBackground } from "./AnimatedBackground";
import { LogoSection } from "./LogoSection";
import { ActionButtons } from "./ActionButtons";

export const LandingPage = () => {
  return (
    <main>
      <div className="overflow-hidden relative w-screen h-screen bg-white">
        <AnimatedBackground />
        <div className="flex relative z-10 flex-col justify-center items-center p-4 size-full">
          <LogoSection />
          <ActionButtons />
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">',
          }}
        />
      </div>
    </main>
  );
};

export default LandingPage;
