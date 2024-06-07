'use client';
import { useState } from 'react';
import { db } from '@/config/firebase'; 
import { collection, addDoc } from 'firebase/firestore';
const page = () => {
    const [subscriptionData, setSubscriptionData] = useState({
        name: '',
        description: '',
        totalMeetings: '',
        timePeriod: '',
        price: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSubscriptionData({ ...subscriptionData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          await addDoc(collection(db, 'subscriptions'), {
            ...subscriptionData,
            totalMeetings: parseInt(subscriptionData.totalMeetings),
            timePeriod: parseInt(subscriptionData.timePeriod),
            price: parseFloat(subscriptionData.price),
          });
    
          alert('Subscription added successfully');
          setSubscriptionData({
            name: '',
            description: '',
            totalMeetings: '',
            timePeriod: '',
            price: '',
          });
        } catch (error) {
          console.error('Error adding document: ', error);
          alert('Error adding subscription');
        }
      };
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
            Add a Subscription
          </h2>
        </div>

        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form id="subscription-form" onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-8">
              <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
                Subscription Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={subscriptionData.name}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Subscription Name"
                required
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="description" className="block mb-2 text-sm font-medium dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={subscriptionData.description}
                onChange={handleChange}
                rows={3}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Description"
                required
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="totalMeetings" className="block mb-2 text-sm font-medium dark:text-white">
                Total Meetings
              </label>
              <input
                type="number"
                id="totalMeetings"
                name="totalMeetings"
                value={subscriptionData.totalMeetings}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Total Meetings"
                required
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="timePeriod" className="block mb-2 text-sm font-medium dark:text-white">
                Time Period (days)
              </label>
              <input
                type="number"
                id="timePeriod"
                name="timePeriod"
                value={subscriptionData.timePeriod}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Time Period"
                required
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="price" className="block mb-2 text-sm font-medium dark:text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={subscriptionData.price}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Price"
                required
              />
            </div>

            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
}

export default page;