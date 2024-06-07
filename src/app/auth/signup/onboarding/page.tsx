"use client";
import { useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";

const page = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		weight: "",
		height: "",
		subscriptionType: "",
		subscriptionStart: "",
		subscriptionEnd: "",
		remainingMeetings: "",
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await addDoc(collection(db, "clients"), {
				...formData,
				weight: parseInt(formData.weight),
				height: parseInt(formData.height),
				remainingMeetings: parseInt(formData.remainingMeetings),
				subscription: {
					type: formData.subscriptionType,
					start: new Date(formData.subscriptionStart),
					end: new Date(formData.subscriptionEnd),
				},
			});

			alert("Client added successfully");
			setFormData({
				name: "",
				email: "",
				phone: "",
				weight: "",
				height: "",
				subscriptionType: "",
				subscriptionStart: "",
				subscriptionEnd: "",
				remainingMeetings: "",
			});
		} catch (error) {
			console.error("Error adding document: ", error);
			alert("Error adding client");
		}
	};
	return (
		<div className=" w-[60rem]">
			{/* <!-- Client Form --> */}
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="mx-auto max-w-4xl">
					<div className="text-center">
						<h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
							Add a Client
						</h2>
					</div>

					{/* <!-- Card --> */}
					<div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
						<form id="client-form" onSubmit={handleSubmit}>
							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Full name
								</label>
								<input
									type="text"
									id="name"
									name="name"
                                    value={formData.name}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Full name"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Email address
								</label>
								<input
									type="email"
									id="email"
									name="email"
                                    value={formData.email}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Email address"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="phone"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Phone number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Phone number"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="weight"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Weight (kg)
								</label>
								<input
									type="number"
									id="weight"
									name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Weight"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="height"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Height (cm)
								</label>
								<input
									type="number"
									id="height"
									name="height"
                                    value={formData.height}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Height"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="subscriptionType"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Subscription Type
								</label>
								<input
									type="text"
									id="subscriptionType"
									name="subscriptionType"
                                    value={formData.subscriptionType}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Subscription Type"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="subscriptionStart"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Subscription Start
								</label>
								<input
									type="date"
									id="subscriptionStart"
									name="subscriptionStart"
                                    value={formData.subscriptionStart}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="subscriptionEnd"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Subscription End
								</label>
								<input
									type="date"
									id="subscriptionEnd"
									name="subscriptionEnd"
                                    value={formData.subscriptionEnd}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									required
								/>
							</div>

							<div className="mb-4 sm:mb-8">
								<label
									htmlFor="remainingMeetings"
									className="block mb-2 text-sm font-medium dark:text-white"
								>
									Remaining Meetings
								</label>
								<input
									type="number"
									id="remainingMeetings"
									name="remainingMeetings"
                                    value={formData.remainingMeetings}
                                    onChange={handleChange}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="Remaining Meetings"
									required
								/>
							</div>

							<div className="mt-6 grid">
								<button
									type="submit"
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					{/* <!-- End Card --> */}
				</div>
			</div>
			{/* <!-- End Client Form --> */}
		</div>
	);
};

export default page;
