import useSWR, { SWRConfig } from 'swr';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Times from './Times';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Stations() {
	const [ times, setTimes ] = useState(false);
	const [ clickedStation, setClickedStation ] = useState('12TH');
	const [ clickedIndex, setClickedIndex ] = useState('0');
	const url = 'https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y';
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>Error...</div>;
	if (!data) return <div>Loading...;</div>;

	// Only re-run the effect if count changes

	const handleClick = (abbr, e, idx) => {
		setTimes(!times);
		setClickedStation(abbr);
		setClickedIndex(idx);
		console.log(idx);
	};

	let info = [
		...data.root.stations.station.map((obj, idx) => {
			return (<>
				<div
					className={'font-test text-3xl hover:text-altblue cursor-pointer'}
					key={obj.abbr}
					onClick={(e) => handleClick(obj.abbr, e, idx)}
				>
					{obj.name}
				
				</div>
					<div className={'font-test text-xl'}>
					{times ? (
						<Times abbr={clickedStation} key={obj.name} index={idx} clickedIndex={clickedIndex} />
					) : (
						''
					)}
				</div>
				</>
			);
		})
	];



	return info;
}
