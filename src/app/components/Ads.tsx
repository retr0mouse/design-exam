import Image from "next/image";

import Character2Image from "./../../images/devprojects.png";
import GameDevImage from "./../../images/gamedev.png";
import GamingTechImage from "./../../images/gamingtech.png";
import CharacterColorImage from "./../../images/marketing.png";
import OnlineGamingImage from "./../../images/onlinegaming.png";
import CasinoImage from "./../../images/restaurantcasino.png";
import CharacterBWImage from "./../../images/photo2.png";

export default function Ads() {
    return (
        <>
            <div className="p-10 bg-white flex flex-col md:flex-row">
                <div className="md:order-2 md:w-1/3"><Image src={CharacterBWImage} alt={""} /></div>
                <div className="md:order-1 md:w-2/3">
                    <h1 className="font-bold text-4xl text-red-700 mb-5">Lorem Ipsum</h1>
                    <p>
                        Cherry är ett innovativt och snabbväxande spel-företag grundat 1963 vars övergripande strategi är att skapa aktievärde genom att äga och utveckla snabbväxande och lönsamma bolag inom spel och casino.<br /><br />

                        Idag bedriver Cherry sin verksamhet genom fem diversifierade affärsområden, Nätspel via Cherry iGaming, Prestationsbaserad Marknads-föring via Game Lounge, Spelteknologi via XCaliber, Spelutveckling via Yggdrasil Gaming och Restaurangcasino via Cherry Spelglädje.<br /><br />

                        Bolagets målsättning är att växa organiskt och genom strategiska förvärv av snabbväxande företag. Cherry sysselsätter cirka 900 personer och har drygt 4 600 aktie-ägare. Bolagets B-aktie är listad på AktieTorget.
                    </p>
                    <button className="bg-red-700 text-white w-2/5 rounded-md font-bold mt-12 p-2">Lorem Ipsum</button>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 order-2"><Image src={OnlineGamingImage} alt={""} /></div>
                    <div className="md:w-1/2  order-1 bg-[#8DB52433] p-5">
                        <h1 className="text-[#8DB524] font-bold text-2xl">Online Gaming</h1>
                        <p className="text-[#8DB524]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2"><Image src={CasinoImage} alt={""} /></div>
                    <div className="md:w-1/2 bg-[#8961A633] p-5">
                        <h1 className="text-[#8961A6] font-bold text-2xl">Restaurant Casino</h1>
                        <p className="text-[#8961A6]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div  className="md:w-1/2 order-2"><Image src={GameDevImage} alt={""} /></div>
                    <div className="md:w-1/2 order-1 bg-[#f393323d] p-5">
                        <h1 className="text-[#F39332] font-bold text-2xl">Game Developement</h1>
                        <p className="text-[#F39332]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2"><Image src={CharacterColorImage} alt={""} /></div>
                    <div className="md:w-1/2 bg-[#41bfed3d] p-5">
                        <h1 className="text-[#41BFED] font-bold text-2xl">Performance-based Marketing</h1>
                        <p className="text-[#41BFED]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 order-2"><Image src={GamingTechImage} alt={""} /></div>
                    <div className="md:w-1/2 order-1 bg-[#E7E8E8] p-5">
                        <h1 className="text-[#4A4A4A] font-bold text-2xl">Gaming Technology</h1>
                        <p className="text-[#4A4A4A]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2"><Image src={Character2Image} alt={""} /></div>
                    <div className="md:w-1/2 bg-[#d412183f] p-5">
                        <h1 className="text-[#D41217] font-bold text-2xl">Developement Projects</h1>
                        <p className="text-[#D41217]">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium.</p>
                    </div>
                </div>

            </div>

            
        </>
    )
}