import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface SettingsMenuProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const SettingsMenu: FC<SettingsMenuProps> = ({ 
  isLoggedIn: propIsLoggedIn, 
  onLogout = () => console.log('Logout clicked') 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  
  // Use the authentication state from context if available, otherwise use the prop
  const isLoggedIn = isAuthenticated !== undefined ? isAuthenticated : propIsLoggedIn;

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Marketing Plan', path: '/home' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const handleLogout = () => {
    logout();
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className="fixed top-3 right-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white bg-opacity-80 shadow-lg 
                   hover:bg-wawa-yellow-400 transition-all duration-200 group"
        aria-label="Settings menu"
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white bg-opacity-90 
                        shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm">
            <div className="py-1">
              {/* Navigation Links */}
              {pages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block px-4 py-2 text-sm text-wawa-gray-700 hover:bg-wawa-yellow-400 
                           hover:text-wawa-red-600 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </Link>
              ))}

              {/* Divider */}
              <div className="h-px bg-wawa-gray-200 my-1" />

              {/* Auth Section */}
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-wawa-gray-700 hover:bg-wawa-yellow-400 
                             hover:text-wawa-red-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="block px-4 py-2 text-sm text-wawa-gray-700 hover:bg-wawa-yellow-400 
                             hover:text-wawa-red-600 transition-all duration-200 w-full text-left bg-transparent"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-wawa-gray-700 hover:bg-wawa-yellow-400 
                             hover:text-wawa-red-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-wawa-gray-700 hover:bg-wawa-yellow-400 
                             hover:text-wawa-red-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsMenu; 