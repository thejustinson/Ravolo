import Image from "next/image"
import Logo from "./Logo"
import useTrimAddress from "@/hooks/useTrimAddress"
const NavBar = () => {

    // This is just a dummy wallet address. The actual one will be used when we've added the connect wallet feature 
    
    const userAddress = "Oxdecsgafgengda64aje45bghs"
    

    return (
        <nav className="relative px-10 py-5 flex justify-between items-center select-none border-b border-neutral-900 bg-neutral-950">
            <Logo/>
            <div className="flex items-center gap-3">
                <div>
                    {useTrimAddress(userAddress)}
                </div>
                <div className="w-[40px] h-[40px] p-[1px] border border-neutral-800 rounded-full">
                    <Image src={'/defaultDPs/steeze.jpg'} alt="profile picture" width={50} height={50} className="w-full h-full rounded-full object-cover"/>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar
