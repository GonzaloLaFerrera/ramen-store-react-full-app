import { useForm } from "react-hook-form";


const Contact = () => { 
    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    console.log(errors)

    const onSubmit = handleSubmit((data) => {
        console.log(data) // Acá vendría un POST al back
        alert('Processing data....')
        reset()
        alert('Your contact form was succesfully sent')
    })

    return (
        <div className="flex flex-col gap-2 bg-[#1F1D2B] w-full p-2 pb-8 rounded-md">
            <h3 className="text-[#ec7c6a] text-2xl">Contact us!</h3>
            <h3 className="text-gray-300 text-xl mb-4">Please, fill the form to contact Koi Dragon Ramen</h3>
            <div>
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <label htmlFor="name" className="text-gray-300">Name</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Please, enter your name..."
                        className="mb-2 rounded-sm p-1"
                        { ...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required!'
                            },
                            minLength: {
                                value: 2,
                                message: 'Name must have at least 2 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Name must have a maximum of 20 characters'
                            }
                        })}
                    />
                    { errors.name && <span className="text-red-500 mb-1">{errors.name.message}</span> }
                    
                    <label htmlFor="lastName" className="text-gray-300">Last name</label>
                    <input 
                        type="text"
                        id="lastName" 
                        placeholder="Please, enter your last name..."
                        className="mb-2 rounded-sm p-1"
                        {...register('lastName', {
                            required: {
                                value: true,
                                message: 'Last name is required!'
                            },
                            minLength: {
                                value: 2,
                                message: 'Last name must have at least 2 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Last name must have a maximum of 20 characters'
                            }
                        })}
                    />
                    { errors.lastName && <span className="text-red-500 mb-1">{errors.lastName.message}</span>}

                    <label htmlFor="email" className="text-gray-300">E-mail</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Please, enter your e-mail..."
                        className="mb-2 rounded-sm p-1"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required!'
                            },
                            pattern: {
                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(.+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: 'Email is not valid. Must have a domain'
                            }
                        })}
                    />
                    { errors.email && <span className="text-red-500 mb-1">{errors.email.message}</span>}

                    <label htmlFor="comment" className="text-gray-300">Comments</label>
                    <textarea 
                        name="comment" 
                        id="comment" 
                        placeholder="Make a comment or suggestion, send your gratitude, or make a wish... "
                        className="mb-2 rounded-sm p-2"
                        {...register('comment', {
                            required: {
                                value: true,
                                message: 'Your message is required!'
                            },
                            minLength: {
                              value: 10,
                              message: 'Name must have at least 10 characters'
                            },
                            maxLength: {
                              value: 60,
                              message: 'Name must have a maximum of 60 characters'
                            }
                        })}
                    />
                    { errors.comment && <span className="text-red-500 mb-1">{errors.comment.message}</span>}

                    <button 
                        className="bg-[#262837] text-[#ec7c6a] font-semibold border-[2px] border-gray-400 rounded-lg hover:bg-[#ec7c6a] hover:text-white hover:border-white transition-all p-2 mx-28 mt-8"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;