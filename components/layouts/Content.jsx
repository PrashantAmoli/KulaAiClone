import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Sticky from 'react-stickynode';

import { useEffect } from 'react';

export default function Content({ content }) {
	const myRef = useRef([]);

	const [currentVideo, setCurrentVideo] = useState(1);
	const [videoRef1, inView1] = useInView({
		threshold: 0.7,
	});
	const [videoRef2, inView2] = useInView({
		threshold: 0.7,
	});
	const [videoRef3, inView3] = useInView({
		threshold: 0.7,
	});

	useEffect(() => {
		// Return true when in view
		if (inView1) {
			setCurrentVideo(1);
		}
		if (inView2) {
			setCurrentVideo(2);
		}
		if (inView3) {
			setCurrentVideo(3);
		}
	}, [inView1, inView2, inView3]);

	return (
		<div className="flex fle-col lg:flex-row relative -z-10 gap-20 w-full my-16">
			<div className="flex flex-col gap-96 w-[500px] h-[450px] md:w-4/12">
				{content?.map((content, i) => (
					<div
						className="flex flex-col justify-center items-start gap-4 flex-wrap p-1 sm:p-3"
						key={i}
						ref={i == 0 ? videoRef1 : i == 1 ? videoRef2 : videoRef3}
					>
						<span ref={myRef.current[i]} className="heading bg-clip-text text-transparent font-bold text-2xl tracking-wide">
							{content.heading}
						</span>
						<h1 className="text-5xl font-bold tracking-wide">{content.subHeading}</h1>
						<p className="text-gray-500 font-medium tracking-wide">{content.description}</p>
					</div>
				))}
				<div className="min-h-[1rem]"></div>
			</div>

			<Sticky top={200}>
				<div className=" top-0 md:right-1/4 w-[400px] h-[300px] md:w-[500] md:h-[330] lg:w-[700px] lg:h-[450px]">
					<div className="rounded-[3rem] overflow-hidden w-full h-full">
						<video autoPlay loop muted className="w-full h-full object-cover" type="video/mp4" src={`/${currentVideo}.mp4`} />
					</div>
				</div>
			</Sticky>
		</div>
	);
}
