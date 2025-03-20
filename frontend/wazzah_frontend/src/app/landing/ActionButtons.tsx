import { ActionButton } from "./ActionButton";
export const ActionButtons = () => {
  const RegisterIcon = () => (
    <svg
      viewBox="0 0 172 172"
      fill="none"
      className="mb-2 transition-transform duration-300 ease-in-out h-[172px] w-[172px]"
    >
      <path
        d="M150.5 14.3333L136.167 28.6666M136.167 28.6666L157.667 50.1667L132.583 75.25L111.083 53.75M136.167 28.6666L111.083 53.75M81.6284 83.205C85.3288 86.8562 88.2704 91.2033 90.2839 95.996C92.2974 100.789 93.343 105.932 93.3604 111.131C93.3778 116.329 92.3667 121.48 90.3854 126.286C88.4041 131.092 85.4916 135.459 81.8157 139.135C78.1398 142.811 73.7731 145.723 68.967 147.704C64.1609 149.686 59.0103 150.697 53.8119 150.679C48.6134 150.662 43.4697 149.616 38.677 147.603C33.8843 145.589 29.5372 142.648 25.886 138.947C18.7059 131.513 14.733 121.557 14.8228 111.222C14.9126 100.887 19.058 91.0005 26.3662 83.6923C33.6743 76.3841 43.5605 72.2387 53.8955 72.1489C64.2304 72.0591 74.1871 76.0321 81.6212 83.2122L81.6284 83.205ZM81.6284 83.205L111.083 53.75"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const LoginIcon = () => (
    <svg
      viewBox="0 0 172 172"
      fill="none"
      className="mb-2 transition-transform duration-300 ease-in-out h-[172px] w-[172px]"
    >
      <path
        d="M50.1667 78.8333V50.1666C50.1667 40.6631 53.942 31.5487 60.662 24.8287C67.3821 18.1086 76.4964 14.3333 86 14.3333C95.5036 14.3333 104.618 18.1086 111.338 24.8287C118.058 31.5487 121.833 40.6631 121.833 50.1666V78.8333M35.8333 78.8333H136.167C144.083 78.8333 150.5 85.2506 150.5 93.1666V143.333C150.5 151.249 144.083 157.667 136.167 157.667H35.8333C27.9173 157.667 21.5 151.249 21.5 143.333V93.1666C21.5 85.2506 27.9173 78.8333 35.8333 78.8333Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const GuestIcon = () => (
    <svg
      viewBox="0 0 172 172"
      fill="none"
      className="mb-2 transition-transform duration-300 ease-in-out h-[172px] w-[172px]"
    >
      <path
        d="M86 86C78.1167 86 71.3681 83.1931 65.7542 77.5792C60.1403 71.9653 57.3334 65.2167 57.3334 57.3334C57.3334 49.45 60.1403 42.7014 65.7542 37.0875C71.3681 31.4736 78.1167 28.6667 86 28.6667C93.8834 28.6667 100.632 31.4736 106.246 37.0875C111.86 42.7014 114.667 49.45 114.667 57.3334C114.667 65.2167 111.86 71.9653 106.246 77.5792C100.632 83.1931 93.8834 86 86 86ZM28.6667 143.333V123.267C28.6667 119.206 29.7118 115.473 31.8021 112.069C33.8924 108.665 36.6695 106.067 40.1334 104.275C47.5389 100.572 55.0639 97.7952 62.7084 95.9438C70.3528 94.0924 78.1167 93.1667 86 93.1667C93.8834 93.1667 101.647 94.0924 109.292 95.9438C116.936 97.7952 124.461 100.572 131.867 104.275C135.331 106.067 138.108 108.665 140.198 112.069C142.288 115.473 143.333 119.206 143.333 123.267V143.333H28.6667Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-wrap gap-8 justify-center w-full max-w-screen-xl max-md:gap-6 max-sm:flex-col max-sm:gap-4 max-sm:items-center">
      <ActionButton
        href="/RegisterPage"
        icon={<RegisterIcon />}
        label="REGISTER"
        bgColor="bg-green-500"
        shadowColor="shadow-[0px_8px_16px_rgba(57,191,52,0.3)]"
      />
      <ActionButton
        href="/LoginPage/LoginPage.tsx"
        icon={<LoginIcon />}
        label="LOGIN"
        bgColor="bg-fuchsia-600"
        shadowColor="shadow-[0px_8px_16px_rgba(192,50,187,0.3)]"
      />
      <ActionButton
        href="./ViewerPage"
        icon={<GuestIcon />}
        label="GUEST"
        bgColor="bg-indigo-700"
        shadowColor="shadow-[0px_8px_16px_rgba(40,0,240,0.3)]"
      />
    </div>
  );
};
