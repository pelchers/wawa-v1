import { FC } from 'react';
import { Link } from 'react-router-dom';

const PrimaryNavbar: FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-wawaHeading font-bold text-wawa-red-600">
            Wawa
          </Link>
          <div className="flex space-x-4">
            <Link to="/dashboard" className="text-wawa-gray-600 hover:text-wawa-red-600">
              Dashboard
            </Link>
            <Link to="/profile" className="text-wawa-gray-600 hover:text-wawa-red-600">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNavbar; 