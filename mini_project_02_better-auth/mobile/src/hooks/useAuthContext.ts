
import { authClient } from "../lib/auth-client"
import {AuthContext} from "../contexts/auth-context"
import { useContext } from "react"

export const useAuth = () => {
    const {User,setUser,loading,setLoading} = useContext(AuthContext)

    const handleSignUp = async (email:string,password:string,name:string) => {
       
        try {
            
            setLoading(true)

            const response = await authClient.signUp.email({
                email,
                password,
                name
             })

             setUser(response.data);

            return true
        } catch (error) {
            console.log(error)
            return false
        }finally{
            setLoading(false)
        }
    }



    const handleSignIn = async (email:string,password:string) => {
        //console.log(email,password)
       
        try {

            setLoading(true)
             const response =  await authClient.signIn.email({
                email,
                password,
            })
            setUser(response.data);
            return true;

        } catch (error) {
            console.log(error)
            return false;
        }finally{
            setLoading(false)
        }
    }



    return {
        handleSignIn,
        handleSignUp,
        loading,
        User,
        setUser,
        setLoading
    }


}