"use client"
import Head from "next/head";
import Script from 'next/script';

import { useEffect } from "react";

const page = () => {
	function handleClick() {
        // @ts-ignore
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/mohammadsami',
        });
        return false;
      }
	return (
		<div>
			{/* <!-- Calendly inline widget begin --> */}
			<>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <button onClick={handleClick}>Schedule</button>
    </>
			{/* <!-- Calendly inline widget end --> */}
      <iframe src="https://calendar.google.com/calendar/embed?src=samishaikh6810%40gmail.com&ctz=Asia%2FKolkata" style={{border: "0", width:"80vw", height:"80vh"}}></iframe>
		</div>
	);
};

export default page;
