// SignUp.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const navigate = useNavigate();
  const userID = '1234567'

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/home');
    ReactGA.event({
      category: 'User',
      action: 'User close Help Operation Dialog',
      label: userID,
    });
  };

  useEffect(() => {
    ReactGA.send('page_view_Sign-up' + window.location.search);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-black p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Email:
            <input
              className="border border-gray-300 px-2 py-1 w-full"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            Password:
            <input
              className="border border-gray-300 px-2 py-1 w-full"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
