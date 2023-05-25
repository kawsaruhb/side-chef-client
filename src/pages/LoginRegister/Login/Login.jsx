import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa';

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
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    // ------------------------------- Google Login ---------------------------- //

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    // ---------------------------------- Github ------------------------------------ //

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const githubUser = result.githubUser;
            console.log(githubUser);
        })
        .catch(error => console.log(error))
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
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn btn-primary border-none bg-blue-600"><FaGoogle className='text-xl me-3'></FaGoogle> Sign In with Google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGithubSignIn} className="btn border-none bg-gray-500"><FaGithub className='text-xl me-3'></FaGithub> Sign In with Github</button>
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