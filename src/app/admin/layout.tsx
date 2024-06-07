import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			{/* <!-- ========== HEADER ========== --> */}
			<header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
				<nav
					className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
					aria-label="Global"
				>
					<div className="me-5 lg:me-0 lg:hidden">
						{/* <!-- Logo --> */}
						<Link
							className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
							href="../templates/admin/index.html"
							aria-label="Preline"
						>
							<Image src={logo} alt="RIYU" width={100} height={100} />
						</Link>
						{/* <!-- End Logo --> */}
					</div>

					<div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
						<div className="sm:hidden">
							<button
								type="button"
								className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
							>
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
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</button>
						</div>

						<div className="hidden sm:block">
							<label htmlFor="icon" className="sr-only">
								Search
							</label>
							<div className="relative min-w-72 md:min-w-80">
								<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
									<svg
										className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
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
										<circle cx="11" cy="11" r="8" />
										<path d="m21 21-4.3-4.3" />
									</svg>
								</div>
								<input
									type="text"
									id="icon"
									name="icon"
									className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Search"
								/>
							</div>
						</div>

						<div className="flex flex-row items-center justify-end gap-2">
							<button
								type="button"
								className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
							>
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
									<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
									<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
								</svg>
							</button>
							<button
								type="button"
								className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
								data-hs-offcanvas="#hs-offcanvas-right"
							>
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
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</button>
							<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
								<button
									id="hs-dropdown-with-header"
									type="button"
									className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
								>
									<img
										className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
										src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										alt="Image Description"
									/>
								</button>

								<div
									className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
									aria-labelledby="hs-dropdown-with-header"
								>
									<div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
										<p className="text-sm text-gray-500 dark:text-neutral-400">
											Signed in as
										</p>
										<p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
											james@site.com
										</p>
									</div>
									<div className="mt-2 py-2 first:pt-0 last:pb-0">
										<Link
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
											href="#"
										>
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
												<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
												<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
											</svg>
											Newsletter
										</Link>
										<Link
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
											href="#"
										>
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
												<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
												<path d="M3 6h18" />
												<path d="M16 10a4 4 0 0 1-8 0" />
											</svg>
											Purchases
										</Link>
										<Link
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
											href="#"
										>
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
												<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
												<path d="M12 12v9" />
												<path d="m8 17 4 4 4-4" />
											</svg>
											Downloads
										</Link>
										<Link
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
											href="#"
										>
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
												<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
												<circle cx="9" cy="7" r="4" />
												<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
												<path d="M16 3.13a4 4 0 0 1 0 7.75" />
											</svg>
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			{/* <!-- ========== END HEADER ========== --> */}

			{/* <!-- ========== MAIN CONTENT ========== --> */}
			{/* <!-- Breadcrumb --> */}
			<div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
				<div className="flex justify-between items-center py-2">
					{/* <!-- Breadcrumb --> */}
					<ol className="ms-3 flex items-center whitespace-nowrap">
						<li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
							Admin
							<svg
								className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</li>
						<li
							className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
							aria-current="page"
						>
							Dashboard
						</li>
					</ol>
					{/* <!-- End Breadcrumb --> */}

					{/* <!-- Sidebar --> */}
					<button
						type="button"
						className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
						data-hs-overlay="#application-sidebar"
						aria-controls="application-sidebar"
						aria-label="Sidebar"
					>
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
							<path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
						</svg>
						<span className="sr-only">Sidebar</span>
					</button>
					{/* <!-- End Sidebar --> */}
				</div>
			</div>
			{/* <!-- End Breadcrumb --> */}

			{/* <!-- Sidebar --> */}
			<div
				id="application-sidebar"
				className="hs-overlay [--auto-close:lg]
				hs-overlay-open:translate-x-0
				-translate-x-full transition-all duration-300 transform
				w-[260px]
				hidden
				fixed inset-y-0 start-0 z-[60]
				bg-white border-e border-gray-200
				lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
				dark:bg-neutral-800 dark:border-neutral-700
				"
			>
				<div className="px-8 pt-4">
					{/* <!-- Logo --> */}
					<Link
						className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
						href="../templates/admin/index.html"
						aria-label="Preline"
					>
						<Image src={logo} alt="RIYU" width={100} height={100} />
					</Link>
					{/* <!-- End Logo --> */}
				</div>

				<nav
					className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
					data-hs-accordion-always-open
				>
					<ul className="space-y-1.5">
						<li>
							<Link
								className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
								href="/admin/dashboard"
							>
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
									<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
								Dashboard
							</Link>
						</li>

						<li>
							<Link
								className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
								href="/admin/clients"
							>
								<svg
									width="21"
									height="21"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="currentColor"
									strokeWidth="1.7"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
									<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
								</svg>{" "}
								Patients/Clients
							</Link>
						</li>

						<li>
							<Link
								className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
								href="/admin/appointments"
							>
								<svg
									width="21"
									height="21"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="currentColor"
									strokeWidth="1.7"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" />
								</svg>
								Appointments
							</Link>
						</li>

						<li>
							<Link
								className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
								href="/admin/calendar"
							>
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
									<rect
										width="18"
										height="18"
										x="3"
										y="4"
										rx="2"
										ry="2"
									/>
									<line x1="16" x2="16" y1="2" y2="6" />
									<line x1="8" x2="8" y1="2" y2="6" />
									<line x1="3" x2="21" y1="10" y2="10" />
									<path d="M8 14h.01" />
									<path d="M12 14h.01" />
									<path d="M16 14h.01" />
									<path d="M8 18h.01" />
									<path d="M12 18h.01" />
									<path d="M16 18h.01" />
								</svg>
								Calendar
							</Link>
						</li>
						<li>
							<Link
								className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
								href="/admin/blogs"
							>
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
									<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
									<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
								</svg>
								Blogs
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{/* <!-- End Sidebar --> */}

			{/* <!-- Content --> */}
			<div className="w-full lg:ps-64">
				<div className="p-4 sm:p-6 space-y-4 sm:space-y-6 min-h-screen">
					{/* <!-- your content goes here ... --> */}
					{children}
				</div>
			</div>
			{/* <!-- End Content --> */}
			{/* <!-- ========== END MAIN CONTENT ========== --> */}
		</section>
	);
}
