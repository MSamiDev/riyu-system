"use client";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Link from "next/link";
interface BlogPost {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	content: string;
	// Add more fields as needed for your blog posts
}
const page = () => {
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			try {
				const blogPostsRef = collection(db, "blogs"); // Assuming 'blogs' is your collection name
				const snapshot = await getDocs(blogPostsRef);

				const postsData: BlogPost[] = snapshot.docs.map(
					(doc) =>
						({
							id: doc.id,
							...doc.data(),
						} as BlogPost)
				); // Explicit type assertion for better safety

				setBlogPosts(postsData);
			} catch (error) {
				console.error("Error fetching blog posts: ", error);
				// Consider displaying an error message to the user
			}
		};

		fetchBlogPosts();
	}, []);

	return (
		<div>
			{/* <!-- Section --> */}
			<div className="max-w-[85rem] px-4 py-3 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<Link
					href={"/admin/blogs/create"}
					className=" float-right py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				>
					Create New
				</Link>
			</div>

			{/* <!-- Card Blog --> */}
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* <!-- Grid --> */}
				<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
					{/* <!-- Card --> */}
					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="sm:flex">
							<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
								<img
									className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
									alt="Image Description"
								/>
							</div>

							<div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
								<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
									Studio by Preline
								</h3>
								<p className="mt-3 text-gray-600 dark:text-neutral-400">
									Produce professional, reliable streams easily
									leveraging Preline's innovative broadcast studio
								</p>
								<p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
									Read more
									<svg
										className="flex-shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="m9 18 6-6-6-6" />
									</svg>
								</p>
							</div>
						</div>
					</a>
					{/* <!-- End Card --> */}

					{blogPosts.map((post) => (
						<a
							key={post.id}
							className="group rounded-xl overflow-hidden"
							href={`/blog/${post.id}`}
						>
							<div className="sm:flex">
								<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
									<img
										className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
										src={post.imageUrl}
										alt={post.title} // Use the post title for image alt text
									/>
								</div>
								<div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
									<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
										{post.title}
									</h3>
									<p className="mt-3 text-gray-600 dark:text-neutral-400">
										{post.description.length > 100
											? post.description.substring(0, 100) + "..."
											: post.description}
									</p>
									<p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
										Read more
										<svg
											className="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="m9 18 6-6-6-6" />
										</svg>
									</p>{" "}
								</div>
							</div>
						</a>
					))}
				</div>
				{/* <!-- End Grid --> */}
			</div>
			{/* <!-- End Card Blog --> */}
		</div>
	);
};

export default page;
