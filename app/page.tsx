import Link from "next/link"

import { store } from "./store/store";
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Summary } from "@/components/summary"

import { DatedForecast } from "@/components/dated-forecast"
import { Highlights } from "@/components/highlights"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import { Search } from "@/components/search"
import { Button } from "@/components/ui/button"
import example from 'public/example.png'
import clouds from 'public/Cloud-background.png'
import Image from "next/image";


//Geo location fetch
// const res = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=11a6eb0ebd4215616fbcbcdf8a3e94a7');


// }

export default async function IndexPage() {
  // const res = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=11a6eb0ebd4215616fbcbcdf8a3e94a7');
  //   const city = await res.json();

    // absolute classes : z-100 absolute left-0 top-0
    
    // const {width,height} = useWindowSize();
    // const searchBtnSize = width >= 1024 ? `lg` : `xl`; 
    // const iconSize = width >= 1024 ? 24 : 48

    // const [isShown, setIsShown] = useState(false);

  // const handleClick = () => {
  //   // toggle visibility
  //   setIsShown(current => !current);
  // };
  return (
    
    <section className="flex flex-col lg:flex-row font-raleway">
      <div className={` flex flex-col h-screen gap-8 lg:space-around bg-inherit w-full lg:w-1/4 `}>
        <Summary />
        </div>
      

  <div className="flex flex-col items-center justify-around lg:w-4/5">
      <div className="flex flex-col w-3/4 gap-8 lg:gap-2 xl:gap lg:justify-between xl:flex-row">
        <DatedForecast />
        <DatedForecast />
        <DatedForecast />
        <DatedForecast />
        <DatedForecast />
      </div>

      <div className="w-3/4">
        <Highlights />
      </div>
    </div>   
    </section>
  )
}
