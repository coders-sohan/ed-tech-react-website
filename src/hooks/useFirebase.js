import { useState } from "react";
import firebaseInitializeAuth from "../Firebase/Firebase.initialize";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import { useEffect } from "react";

firebaseInitializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const signInWithGithub = () => {
		setIsLoading(true);
		return signInWithPopup(auth, githubProvider);
		// .then((result) => {
		// 	// console.log(result.user);
		// 	setUser(result.user);
		// })
		// .catch((error) => {
		// 	const errorMessage = error.message;
		// 	// console.log(errorMessage);
		// 	setError(errorMessage);
		// });
	};

	const handleRegistration = (e) => {
		e.preventDefault();
		console.log(name, email, password);

		if (password.length < 6) {
			setError("Password must be 6 character long");
			return;
		}
		// if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/.test(password)) {
		// 	setError("You need to add capital letter and symbols");
		// 	return;
		// }
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {
						setError(error.message);
					});
				setError("");
				console.log(user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const handleSignIn = (e) => {
		// e.preventDefault();
		return signInWithEmailAndPassword(auth, email, password);
		// .then((result) => {
		// 	const user = result.user;
		// 	setError("");
		// 	console.log(user);
		// })
		// .catch((error) => {
		// 	setError(error.message);
		// });
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleForgotPassword = () => {
		sendPasswordResetEmail(auth, email)
			.then(() => {})
			.catch((error) => {
				setError(error.message);
			});
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// console.log("user already sign in", user);
				setUser(user);
			} else {
				setUser();
			}
			setIsLoading(false);
		});
	}, []);
	return {
		user,
		error,
		setUser,
		setError,
		logOut,
		signInWithGoogle,
		signInWithGithub,
		handleRegistration,
		handleEmailChange,
		handlePasswordChange,
		handleNameChange,
		handleForgotPassword,
		handleSignIn,
		isLoading,
	};
};

export default useFirebase;
