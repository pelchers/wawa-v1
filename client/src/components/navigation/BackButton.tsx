import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-3 left-3 p-2 rounded-full bg-white bg-opacity-80 shadow-lg 
                 hover:bg-wawa-yellow-400 transition-all duration-200 group z-50"
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-wawa-gray-600 group-hover:text-wawa-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default BackButton; 