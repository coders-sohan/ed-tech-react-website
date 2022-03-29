import React from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const {
		signInWithGoogle,
		signInWithGithub,
		handleSignIn,
		handleForgotPassword,
		error,
		setUser,
		setError,
	} = useAuth();
	const history = useHistory();
	const location = useLocation();
	const redirectUrl = location.state?.from || "/home";
	const handleRedirectSignIn = (e) => {
		e.preventDefault();
		handleSignIn()
			.then((result) => {
				const user = result.user;
				setError("");
				console.log(user);
				history.push(redirectUrl);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleRedirectGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
				history.push(redirectUrl);
			})
			.catch((error) => {
				const errorMessage = error.message;
				// console.log(errorMessage);
				setError(errorMessage);
			});
	};
	const handleRedirectGithubSignIn = () => {
		signInWithGithub()
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
				history.push(redirectUrl);
			})
			.catch((error) => {
				const errorMessage = error.message;
				// console.log(errorMessage);
				setError(errorMessage);
			});
	};
	return (
		<>
			<div className="container">
				<div className="my-5">
					<div className="mx-auto w-lg-25 w-100">
						<form onSubmit={handleRedirectSignIn}>
							<h1 className="mb-5 fw-normal display-6 text-center">
								Please <span className="text-general">Sign In</span>
							</h1>

							<div className="form-floating">
								<input
									type="email"
									className="form-control"
									id="floatingInput"
									placeholder="name@example.com"
									required
								/>
								<label htmlFor="floatingInput">Email address</label>
							</div>
							<div className="form-floating mt-4">
								<input
									type="password"
									className="form-control"
									id="floatingPassword"
									placeholder="Password"
									required
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>

							<div className="mt-3">
								<p className="text-danger m-0">{error}</p>
							</div>

							<div className="d-flex justify-content-between align-items-center">
								<div className="checkbox my-3">
									<label className="form-check-label">
										<input
											className="form-check-input"
											type="checkbox"
											value="remember-me"
										/>{" "}
										Remember me
									</label>
								</div>
								<div>
									<Link
										onClick={handleForgotPassword}
										to="/login"
										className="m-0 text-decoration-none"
									>
										Forgot password
									</Link>
								</div>
							</div>

							<button
								className="w-100 btn btn-lg btn-login-logout"
								type="submit"
							>
								Sign in
							</button>
						</form>

						<div className="text-center">
							<button
								onClick={handleRedirectGoogleSignIn}
								className="btn btn-primary mt-5 mx-2 bg-general"
							>
								<i className="fab fa-google"></i>
							</button>
							<button
								onClick={handleRedirectGithubSignIn}
								className="btn btn-primary mt-5 mx-2 bg-general"
							>
								<i className="fab fa-github"></i>
							</button>
						</div>

						<div className="text-center">
							<p className="mt-4">------ OR ------</p>
							<div className="my-3">
								<NavLink className="text-decoration-none" to="/register">
									Create an account?
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

export default Login;
