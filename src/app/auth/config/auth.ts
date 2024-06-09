// auth.js
import { auth, googleProvider } from "@/config/firebase";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

export const login = async (email : string, password : string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredential.user;
	} catch (error) {
		console.error("Error logging in:", error);
		throw error;
	}
};

export const register = async (email : string, password : string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredential.user;
	} catch (error) {
		console.error("Error registering:", error);
		throw error;
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.error("Error logging out:", error);
		throw error;
	}
};

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, googleProvider);
		return result.user;
	} catch (error) {
		console.error("Error signing in with Google:", error);
		throw error;
	}
};
