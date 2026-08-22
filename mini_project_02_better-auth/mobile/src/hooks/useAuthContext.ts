import { authClient } from "../lib/auth-client";
import { AuthContext } from "../contexts/auth-context";
import { useContext } from "react";

export const useAuth = () => {
  const { User, setUser, loading, setLoading, error, setError } =
    useContext(AuthContext);

  const handleSignUp = async (
    email: string,
    password: string,
    name: string,
  ) => {
    setError(null);
    try {
      setLoading(true);

      const response = await authClient.signUp.email({
        email,
        password,
        name,
      });
      setError(response.error?.message);

      setUser(response.data);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    //console.log(email,password)
    setError(null);

    try {
      setLoading(true);
      const response = await authClient.signIn.email({
        email,
        password,
      });
      setError(response.error?.message);
      setUser(response.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setError(null);
    try {
      setLoading(true);
      await authClient.signOut();
      setUser(null);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignIn,
    handleSignUp,
    handleSignOut,
    loading,
    User,
    setUser,
    setLoading,
    error,
    setError,
  };
};
