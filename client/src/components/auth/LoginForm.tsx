import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoginRequest } from '../../types/auth';

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState<string>('');
  
  const { login, error, loading, clearError } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear errors when user types
    if (error) clearError();
    if (formError) setFormError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setFormError('Email and password are required');
      return;
    }

    const success = await login(formData);
    
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-wawa-red-600 mb-6">Login</h2>
      
      {(error || formError) && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error || formError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wawa-red-500"
            disabled={loading}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wawa-red-500"
            disabled={loading}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-wawa-red-600 text-white py-2 px-4 rounded-md hover:bg-wawa-red-700 transition-colors disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-wawa-red-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm; 