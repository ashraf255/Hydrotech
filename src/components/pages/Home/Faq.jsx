import React from 'react'

const Faq = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:dark:text-gray-400">"HydroTech Insights: Your Hydroponics, Elevated!"</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> How does the plant disease detection system work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">By analyzing plant photos, our sophisticated machine learning algorithms can spot early warning indicators of illness. For a healthy crop, get alerts instantly and take preventative action. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What IoT devices are compatible with the nutrition monitoring feature?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Many different types of IoT sensors are compatible with our system. A thorough picture of your hydroponic system is provided by connecting easily with sensors that track pH, fertilizer levels, and ambient factors. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Can I access real-time data and insights from anywhere?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400"> Yes, our platform offers remote access to real-time data. Monitor your hydroponics system, receive alerts, and adjust settings on-the-go through our user-friendly interface, ensuring your plants are thriving 24/7.</p>
			</details>
		</div>
	</div>
</section>
  )
}

export default Faq