
import useSWR, {SWRConfig} from "swr";
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json());


export default function Stations() {
  const url =
    "https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...;

  </div> 
  console.log(data.root.stations.station);
let info = data.root.stations.station.map((obj, idx) => {  return <Link href='/' ><a className={"font-test text-3xl hover:text-altblue cursor-pointer"}>{obj.name}</a></Link>

}
)
  
  
 return  info;
}
