'use client';

import { useRouter } from 'next/navigation';

interface AppBackButtonProps {
  className?: string;
}

const AppBackButton = ({ className = '' }: AppBackButtonProps) => {
  const router = useRouter();

  return (
    <button
      aria-label="Go back to previous page"
      className={`text-black opacity-50 hover:opacity-100 transition-opacity ${className}`}
      type="button"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default AppBackButton;
