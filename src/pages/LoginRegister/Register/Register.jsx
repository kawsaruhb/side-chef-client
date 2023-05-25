import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <h6 className='text-sm  mt-2'>Already have an account? <Link to='/login'><span className='underline text-blue-500'>Sign In</span></Link></h6>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-black">Sign Up</button>
                        </div>
                    </form>
                </div>

                <div className="text-center lg:text-left ">
                    <img className='rounded-xl' src="https://i.ibb.co/M707bt9/Your-paragraph-text-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;