import useSWR, { SWRConfig } from 'swr';
import { useState } from 'react';
import '../pages/api/station';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Times({ abbr, index, clickedIndex }) {
	if (index !== clickedIndex) return '';

	const departureTimeUrl = `https://api.bart.gov/api/etd.aspx?cmd=etd&key=MW9S-E7SL-26DU-VV8V&json=y&orig=${abbr}`;

	//sconst { data, error } = useSWR(stationsUrl, fetcher);
	const { data, error } = useSWR(() => departureTimeUrl, fetcher);
	if (error) return <div>Error...</div>;
	if (!data) return <div>Loading...</div>;
	//console.log(data.root.station[0]);
	//console.log(abbr);

	//let info = data.root.station[0].map((obj, idx) => {
	//	return <div key={obj.abbr}>{console.log(obj)}</div>;
	//});
	let info = 'No Train Data Available';
	//	{
	//		data.root.station[0].etd ? (info = `${data.root.station[0].etd[0].estimate[0].minutes} minutes`) : '';
	//	}
	let nest = '';
	{
		data.root.station[0].etd
			? (info = [
					...data.root.station[0].etd.map((obj, idx) => {
						nest = obj.estimate.map((objct, idx) => {
							return Object.values(objct);
						});

						console.log(nest);
						return (
							<div className="flex space-x-4 ">
								<div> {obj.destination}: </div>

								<div className="">
									<div>Minutes: {nest[0][0]}</div>
									<div>Direction: {nest[0][2]}</div>
									<div>Line: {nest[0][4]}</div>
								</div>
								<br />
							</div>
						);
					})
				])
			: '';
	}

	return info;
}
