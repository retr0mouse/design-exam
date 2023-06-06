import Image from "next/image"
import CompanyLogo from "../../app/assets/logo.svg";
import BurgerMenu from "../../app/assets/burger.svg";
import Arrow from "../../app/assets/arrow-down-white.svg";
import Search from "../../app/assets/search-icon.svg";

export default function Header() {
    return (
        <>
            <div className="hidden md:block bg-[#ffffffc9]">
                <Image className="p-4" src={CompanyLogo} alt="" />
                <hr className="h-[2px] bg-red-400 w-full" />
                <div className="flex justify-evenly py-4">
                    <h1 className="uppercase">About Cherry</h1>
                    <h1 className="uppercase">Business areas</h1>
                    <h1 className="uppercase">Corporate governance</h1>
                    <h1 className="uppercase">Investors</h1>
                    <h1 className="uppercase">Media</h1>
                    <h1 className="uppercase">Career</h1>
                    <h1 className="uppercase">Contact</h1>
                    <h1 className="uppercase">CHER B: 59.50sek +1.75</h1>
                    <div>
                        <div className="flex gap-2">
                            <button className="text-white rounded-sm bg-red-600 flex items-center gap-2 px-2"><p className="uppercase">eng</p><Image src={Arrow} alt="" /></button>
                            <button><Image src={Search} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden bg-[#ffffffdd] flex justify-between px-5 py-2 w-full">
                <Image src={CompanyLogo} alt="" />
                <button><Image src={BurgerMenu} alt="" /></button>
            </div>
        </>

    );
}