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
		</div>
	);
};

export default page;
