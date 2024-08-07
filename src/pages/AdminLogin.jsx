import { useNavigate } from "react-router-dom";

const AdminLogin = () => { 

    const navigate = useNavigate();
    
    return (
        <div className="m-2">
            <h3 className="text-gray-300 text-2xl">Welcome!</h3>
            <h5 className="text-gray-400 text-xl mb-4">Please, Sign in.</h5>
            <form className="flex flex-col gap-2">
                <input type="text" placeholder="Ingrese nombre de usuario"/>
                <input type="email" placeholder="Ingrese email"/>
                <input type="password" placeholder="Ingrese el password"/>
                <div className="flex justify-center gap-2 m-4">
                    <button 
                        type="submit" 
                        className="bg-[#1F1D2B] text-gray-300 font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2"
                    >
                        Sign In
                    </button>
                    <button
                            onClick={() => navigate('/')}
                            className="bg-[#1F1D2B] text-gray-300 font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2"
                    >
                        Go Back
                    </button>
                </div>
            </form>
        </div>
    )
};

export default AdminLogin;