import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminLogin = () => { 
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: {errors}, reset }= useForm()
    
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        // Acá va la lógica de fetch

        reset()
    })

    console.log(errors)
    
    return (
        <div className="m-2">
            <h3 className="text-[#ec7c6a] text-2xl">Welcome!</h3>
            <h5 className="text-[#ec7c6a] text-xl mb-4">Please, Sign in.</h5>
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="rounded-sm p-1"
                    placeholder="Enter your registered user name"
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Must enter your registered user name'
                        },
                        minLength: {
                          value: 2,
                          message: 'User name must have at least 2 characters'
                        },
                        maxLength: {
                          value: 20,
                          message: 'User name must have a maximum of 20 characters'
                        }
                    })}
                />
                {
                    errors.name && <span className="text-red-800 text-xs">{errors.name.message}</span>
                }
                <input 
                    type="email" 
                    className="rounded-sm p-1"
                    placeholder="Enter your registered email"
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Must enter your registered email'
                        },
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(.+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Email is not valid. Must have a domain'
                        }
                    })}
                />
                {
                    errors.email && <span className="text-red-800 text-xs">{errors.email.message}</span>
                }
                <input 
                    type="password" 
                    className="rounded-sm p-1"
                    placeholder="Enter your password"
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Must enter your registered password'
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
                          message: 'Password is not valid. It must have at least 8 characters, and it must contain at least one minus character, one mayus, one numbers and one special character'
                        }
                    })}
                />
                {
                    errors.password && <span className="text-red-800 text-xs">{errors.password.message}</span>
                }
                <div className="flex justify-center gap-2 m-4">
                    <button
                            onClick={() => navigate('/')}
                            className="bg-[#1F1D2B] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2"
                    >
                        Go Back
                    </button>
                    <button 
                        type="submit" 
                        className="bg-[#1F1D2B] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
};

export default AdminLogin;