import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
	const {
		handleRegistration,
		signInWithGoogle,
		signInWithGithub,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		error,
	} = useAuth();
	return (
		<>
			<div className="container">
				<div className="my-5">
					<div className="mx-auto w-lg-25 w-100">
						<form onSubmit={handleRegistration}>
							<h1 className="mb-5 fw-normal display-6 text-center">
								Please <span className="text-general">Sign Up</span>
							</h1>

							<div className="form-floating">
								<input
									onBlur={handleNameChange}
									type="text"
									className="form-control"
									id="floatingInputName"
									placeholder="name"
									required
								/>
								<label htmlFor="floatingInputName">Name</label>
							</div>
							<div className="form-floating mt-4">
								<input
									onBlur={handleEmailChange}
									type="email"
									className="form-control"
									id="floatingInputEmail"
									placeholder="name@example.com"
									required
								/>
								<label htmlFor="floatingInputEmail">Email address</label>
							</div>
							<div className="form-floating mt-4">
								<input
									onBlur={handlePasswordChange}
									type="password"
									className="form-control"
									id="floatingPassword"
									placeholder="Password"
									required
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>

							<div className="my-3">
								<p className="text-danger">{error}</p>
							</div>

							<button
								className="w-100 btn btn-lg btn-login-logout"
								type="submit"
							>
								Register
							</button>
						</form>

						<div className="text-center">
							<button
								onClick={signInWithGoogle}
								className="btn btn-primary mt-5 mx-2 bg-general"
							>
								<i className="fab fa-google"></i>
							</button>
							<button
								onClick={signInWithGithub}
								className="btn btn-primary mt-5 mx-2 bg-general"
							>
								<i className="fab fa-github"></i>
							</button>
						</div>

						<div className="text-center">
							<p className="mt-4">------ OR ------</p>
							<div className="my-3">
								<NavLink className="text-decoration-none" to="/login">
									Already Registered?
								</NavLink>
							</div>
						</div>

						<p className="mt-5 mb-3 text-muted text-center">
							&copy; MediLife Health Care {Date().slice(11, 15)}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
