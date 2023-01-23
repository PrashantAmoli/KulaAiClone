import Head from 'next/head';
import axios from 'axios';
import { Navbar, Content } from '@/components';

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Kula AI Clone</title>
				<meta name="author" content="Kula AI Clone" />
				<meta name="description" content="Kula AI Clone" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />

				<div className="h-20 w-full"></div>

				<div className="md:p-12 lg:px-24">
					<div className="flex flex-col justify-center items-center text-center">
						<h1 className="font-bold text-5xl">
							Double the hires, half the <br />
							effort
						</h1>
						<p className="mt-20 text-gray-700 font-medium text-lg">
							Open conversations and nurture relationships at scale and be the first choice when your ideal
							<br />
							candidate is ready to explore.
							<br />
						</p>
						<button className="mt-8 mb-20 font-semibold px-10 py-3 bg-gray-100 hover:border-2 hover:border-black hover:bg-transparent rounded-xl">
							View Kula Outreach
						</button>
					</div>

					<Content content={data} />
				</div>
			</main>
		</>
	);
}

// SSG (Static Site Generation)
export async function getStaticProps() {
	const res = await axios.get('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1');
	const data = res.data;
	console.log('getStaticProps:', data.texts.length);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data.texts,
		},
	};
}
