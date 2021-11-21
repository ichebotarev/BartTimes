// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import useSWR, { SWRConfig } from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function handler(req, res) {
	const stationsUrl = 'https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y';
	const { data, error } = useSWR(() => stationsUrl, fetcher);
	if (error) return <div>Error...</div>;
	if (!data) return <div>Loading...;</div>;
	console.log(data.root.station);
	return res.status(200).json({
		data
	});
}
