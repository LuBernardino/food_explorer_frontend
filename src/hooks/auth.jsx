import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const toastOptions = {
        position: toast.POSITION.TOP_RIGHT
    };

    const [ data, setData ] = useState({});
    
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", {email, password});

            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });

        } catch(error) {
            if(error.response) {
                toast.error(error.response.data.message, toastOptions);
            } else {
                toast.error("Não foi possível entrar.", toastOptions);
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
        
                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put('/users', user);
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

            setData({ user, token: data.token });
            toast.success("Perfil atualizado!", toastOptions);

        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message, toastOptions);
            } else {
                toast.error("Não foi possível atualizar o perfil.", toastOptions);
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


            setData({
                token,
                user:JSON.parse(user)
            });
        }

    }, []);

    
    return(
        <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>
            {/* <ToastContainer /> */}
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };