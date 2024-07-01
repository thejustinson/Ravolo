// import { RiCalendar2Line, RiMapPin2Line, RiTimeLine } from "@remixicon/react";
import Image from "next/image";

interface EventDetails{
    id?: string;
    name?: string;
    imageSrc?: string;
    date?: string;
    time?: string;
}

interface BubbleUserImageProps{
    id?: string;
    name?: string;
    color?: string;
    moreClass?: string;
}


const EventsCard = ({id, name, imageSrc, date, time}: EventDetails) => {
  return (
    <div>
      <div className="relative w-full h-fit bg-neutral-900 border border-neutral-800 rounded-md cursor-pointer duration-200 hover:bg-neutral-800 hover:border-neutral-700 active:scale-90 p-2 text-neutral-100 shadow-lg flex gap-x-3">
        
        <div className="w-[100px] h-[100px] rounded-md shrink-0 grow-0">
            <Image src={'/defaultDPs/steeze.jpg'} alt="image" height={150} width={150} className="w-full h-full rounded-md object-cover object-center" />
        </div>

        <div className="mt-1 flex flex-col gap-y-1">
            <div>
                <p className="text-sm text-neutral-500">Thursday - Jun 27, 2024. 3:00 PM</p>
            </div>
            <h2 className="font-bold text-lg">
                IRL Solana Ecosytem Call
            </h2>

            <div className="flex gap-2 mt-3 items-center">
                <div className="flex items-center">
                    <BubbleUserImage color="#3D348B" name="John Doe"/>
                    <BubbleUserImage color="#8093F1" moreClass="-ml-4" name="Miracle Starter"/>
                    <BubbleUserImage color="#72DDF7" moreClass="-ml-4" name="Jo Mega"/>
                </div>

                <p className="text-sm text-neutral-500">
                    +131 Registered
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCard


const BubbleUserImage = ({id, name, color, moreClass}: BubbleUserImageProps) => {
    return(
        <div>
            <div style={{ backgroundColor: color || 'blue', height: '25px', width: '25px', borderRadius: '50%' }} className={`${moreClass} relative group`}>
                <div className="text-xs px-2 py-[2px] rounded top-[26px] left-1/2 -translate-x-1/2 text-nowrap absolute z-10 bg-black hidden group-hover:block">
                    {name}
                </div>
            </div>
        </div>
    )
}