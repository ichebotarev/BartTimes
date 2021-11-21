import useSWR, { SWRConfig } from 'swr';
import { useState } from 'react';
import '../pages/api/station';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Times({ abbr, index, clickedIndex }) {
	console.log(`index: ${index} clickedindex: ${clickedIndex}`);
	if (index !== clickedIndex) return '';
	const stationsUrl = 'https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y';
	const departureTimeUrl = `http://api.bart.gov/api/etd.aspx?cmd=etd&key=MW9S-E7SL-26DU-VV8V&json=y&orig=${abbr}`;

	//sconst { data, error } = useSWR(stationsUrl, fetcher);
	const { data, error } = useSWR(() => departureTimeUrl, fetcher);
	if (error) return <div>Error...</div>;
	if (!data) return <div>Loading...;</div>;
	//console.log(data.root.station[0]);
	//console.log(abbr);

	//let info = data.root.station[0].map((obj, idx) => {
	//	return <div key={obj.abbr}>{console.log(obj)}</div>;
	//});
	let info = 'No Train Data Available';
	{
		data.root.station[0].etd ? (info = `${data.root.station[0].etd[0].estimate[0].minutes} minutes`) : '';
	}
	return info;
}
