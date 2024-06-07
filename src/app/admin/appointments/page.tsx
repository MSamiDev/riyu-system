"use client";
import axios from "axios";
import { useEffect, useState } from "react";


interface EventGuest {
    email: string;
  }
  
  interface Event {
    uri: string;
    name: string;
    start_time: string;
    status: string;
    location: {
      join_url: string;
    };
    event_guests: EventGuest[];
  }


const page = () => {
  const [events, setEvents] = useState<Event[]>([]);
	useEffect(() => {
		async function fetchEvents() {
			try {
				const response = await axios.get("/api/events");
				setEvents(response.data.collection);
				console.log(response.data.collection);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		}

		fetchEvents();
	}, []);
	return (
		<div>
			<div className="flex flex-col">
				<div className="-m-1.5 overflow-x-auto">
					<div className="p-1.5 min-w-full inline-block align-middle">
						<div className="border rounded-lg overflow-hidden dark:border-neutral-700">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 bg-white">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
										>
											Email
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
										>
											Start Time
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
										>
											Join URL
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
									{events.length > 0 ? (
										events.map(event => (
											<tr key={event.uri}>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
													{event.event_guests
														.map(guest => guest.email)
														.join(", ")}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
													{new Date(
														event.start_time
													).toLocaleString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
													{event.status}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
													<a
														href={event.location.join_url}
														className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400"
													>
														Join
													</a>
												</td>
											</tr>
										))
									) : (
										<tr>
											<td
												colSpan={4}
												className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
											>
												No events found.
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
