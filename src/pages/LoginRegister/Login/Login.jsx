import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-40">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-black">Sign In</button>
                            </div>
                        </form>

                        <h6 className='text-sm text-center mb-2'>Don't have an account? <Link to='/register'><span className='underline text-blue-500'>SignUp</span></Link></h6>
                    </div>

                    <div className="text-center lg:text-left ">
                        <img className='rounded-xl' src="https://i.ibb.co/h9g4TSc/Your-paragraph-text.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;