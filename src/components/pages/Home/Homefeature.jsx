import React from 'react'

const Homefeature = () => {
  return (
    <>
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="/drone.png" alt="Drone using in large scale Hydroponics Farm" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Sampling of Aerial Diseases</h3>
				<p className="my-6 dark:text-gray-400">Utilize drone-assisted plant sampling to transform the detection of illness. Effectively gather visual data across broad regions to support proactive disease control and large-scale crop resilience.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="/plantcapture.png" alt="Plant disese detection" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">AI-Powered Disease Recognition</h3>
				<p className="my-6 dark:text-gray-400">Empower your hydroponic farm with AI-driven disease detection. Swiftly identify and address plant issues, optimizing yields and minimizing crop loss for sustainable cultivation.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="/plantmonitroing.png" alt="Plant monitoring" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Real-time Insights on Plant Health</h3>
				<p className="my-6 dark:text-gray-400">Experience advanced IoT technology providing real-time monitoring of hydroponic conditions. Track crucial parameters, receive alerts, and ensure optimal plant health effortlessly.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default Homefeature