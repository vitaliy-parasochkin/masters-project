import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axiosInstance from '../utils/axiosConfig';
import loginImage from '../images/loginImage.png';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const methods = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Помилка входу");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
    <div className="flex bg-blue-50 p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img src={loginImage} alt="Логін Ілюстрація" className="max-w-full h-auto"/>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 text-center">Вхід</h2>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <TextInput name="email" label="Email" type="email" />
            <TextInput name="password" label="Пароль" type="password" />
            <Button type="submit" className="w-full">Увійти</Button>
          </form>
        </FormProvider>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Немає акаунта?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Зареєструватися
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
