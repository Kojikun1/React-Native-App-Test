import React,{ useState,useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import { Alert } from 'react-native';

interface User {
    _id: string;
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    token: string;
    user: User | null;
    signIn(email: string,password: string): Promise<void>;
    register(name: string, email: string, password: string): Promise<void>;
    signOut(): void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user,setUser] = useState<User | null >(null);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=> {
       async function loadStoragedData(){
             setIsLoading(true);
             const storageUser = await AsyncStorage.getItem('@Auth:user');
             const storageToken = await AsyncStorage.getItem('@Auth:token');

             if(storageUser && storageToken){
                 setUser(JSON.parse(storageUser));
                 api.defaults.headers.authorization = `Bearer ${storageToken}`;
             }
             setIsLoading(false);
       }
       loadStoragedData();

    },[]);

     
    async function signIn(email: string,password: string){
        setIsLoading(true);
       try {
            const response = await api.post('/user/session',{
                email,
                password
            });

            setUser(response.data.user);
            await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
            await AsyncStorage.setItem('@Auth:token', response.data.token);
            api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            setIsLoading(false);
       } catch (error) {
        setIsLoading(false);
           if(error.response){
               Alert.alert('Falha no Login',error.response.data.message);
               console.log(error.response.data);
           }   
       }

    }
    async function register(name: string,email: string,password: string){
          setIsLoading(true);
           try {
               const response = await api.post("/user/register", {
                   name,
                   email,
                   password
               });

               console.log(response.data);
                setIsLoading(false);
               Alert.alert('Registrado com Sucesso',"Pode Agora Fazer Login na sua conta");
           } catch (error) {
                setIsLoading(false);
                if(error.response){
                    Alert.alert("Falha ao registrar tente novamente", error.response.data.message);
                }
                console.log(error);
           }
    }
    async function signOut(){

        AsyncStorage.clear().then(()=> {
            setUser(null);
        })
    }

    return (
       <AuthContext.Provider value={{signed: !!user , token: '', user ,isLoading, signIn, signOut, register }} >
           {children}
       </AuthContext.Provider>
    )
};

export default AuthContext;

export function useAuth(){
    return useContext(AuthContext);
}