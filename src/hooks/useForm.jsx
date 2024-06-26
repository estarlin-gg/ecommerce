import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { register, login, setLoading, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await register(credentials.email, credentials.password);
      navigate("/products");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(credentials.email, credentials.password);
      navigate("/");
      setLoading(false);
    } catch (error) {}
  };
  const handleSignUpWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
      setLoading(true);
      navigate("/");
      setLoading(false);
    } catch (error) {}
  };
  return {
    handleChange,
    handleSubmit,
    handleLogin,
    handleSignUpWithGoogle,
  };
};

export default useForm;
