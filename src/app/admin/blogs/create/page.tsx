"use client";
import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, storage } from "@/config/firebase";
import { v4 as uuidv4 } from "uuid"; // For generating unique file names
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

interface BlogPost {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	content: string;
}
const page = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState<File | null>(null);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null); // Clear previous errors

		if (!image) {
			setError("Please select an image.");
			setIsLoading(false);
			return;
		}

		const storageRef = ref(storage, `blogImages/${uuidv4()}`);
		const uploadTask = uploadBytesResumable(storageRef, image);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
			},
			(error) => {
				console.error("Error uploading image:", error);
				setError("Error uploading image.");
				setIsLoading(false);
			},
			async () => {
				const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

				const today = new Date();
				const formattedDate = today.toLocaleDateString();

				const newBlogPost: Omit<BlogPost, "id"> = {
					title,
					description,
					imageUrl,
					date: formattedDate,
					content,
				};

				try {
					const docRef = await addDoc(
						collection(db, "blogs"),
						newBlogPost
					);
					console.log("Document written with ID: ", docRef.id);
					// Reset form, show success message, etc.
				} catch (error) {
					console.error("Error adding document: ", error);
					setError("Error creating blog post.");
				} finally {
					setIsLoading(false);
				}
			}
		);
	};

	return (
		<div>
			{/* <!-- Comment Form --> */}
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="mx-auto max-w-2xl">
					<div className="text-center">
						<h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
							Create A Blog
						</h2>
					</div>

					{/* <!-- Card --> */}
					<div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
						<form onSubmit={handleSubmit}>
							<div className="mb-4 sm:mb-8">
								<label className="block mb-2 text-sm font-medium dark:text-white">
									Title
								</label>
								<input
									type="text"
									onChange={(e) => setTitle(e.target.value)}
									id="hs-feedback-post-comment-name-1"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Title"
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label className="block mb-2 text-sm font-medium dark:text-white">
									Description
								</label>
								<input
									type="text"
									onChange={(e) => setDescription(e.target.value)}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Description"
								/>
							</div>

							<div>
								<label className="block mb-2 text-sm font-medium dark:text-white">
									Content
								</label>
								<div className="mt-1">
									<textarea
										rows={3}
										onChange={(e) => setContent(e.target.value)}
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
										placeholder="Write your content here..."
									></textarea>
								</div>
							</div>

							<div className="mb-4 sm:mb-8">
								<label className="block mb-2 text-sm font-medium dark:text-white">
									Image
								</label>
								<input
									type="file"
									onChange={(e) =>
										setImage(e.target.files?.[0] || null)
									}
									accept="image/*"
									className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 file:sm:py-5 dark:file:bg-neutral-700 dark:file:text-neutral-400"
								/>
								{uploadProgress > 0 && (
									<progress
										value={uploadProgress}
										max="100"
									></progress>
								)}
							</div>
							{error && <p className="text-red-500">{error}</p>}

							<div className="mt-6 grid">
								<button
									type="submit"
									disabled={isLoading}
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
								>
									{isLoading ? "Creating..." : "Create"}
								</button>
							</div>
						</form>
					</div>
					{/* <!-- End Card --> */}
				</div>
			</div>
			{/* <!-- End Comment Form --> */}
		</div>
	);
};

export default page;
