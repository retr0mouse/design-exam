import Image from "next/image";
import CompanyLogo from "../../app/assets/logo.svg";
import FaxLogo from "../../app/assets/fax.svg";
import FBLogo from "../../app/assets/fb.svg";
import LinkedInLogo from "../../app/assets/linkedin.svg";
import MailLogo from "../../app/assets/mail.svg";
import TwitterLogo from "../../app/assets/twitter.svg";

export default function Footer() {
    return (
        <div className="text-center md:text-left flex flex-col items-center">
            <div className="w-full bg-white">
                <h1 className="mt-20 mb-10 text-center font-bold text-2xl text-red-700">Share this page</h1>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="bg-[#8DB524] flex flex-col items-center md:w-1/5">
                        <Image className="py-2 self-center max-w-[40px]" src={FBLogo} alt={""} />
                    </div>
                    <div className="bg-[#8961A6] flex flex-col items-center md:w-1/5">
                        <Image className="py-2 self-center max-w-[40px]" src={TwitterLogo} alt={""} />
                    </div>
                    <div className="bg-[#F39332] flex flex-col items-center md:w-1/5">
                        <Image className="py-2 self-center max-w-[40px]" src={LinkedInLogo} alt={""} />
                    </div>
                    <div className="bg-[#41BFED] flex flex-col items-center md:w-1/5">
                        <Image className="py-2 self-center max-w-[40px]" src={MailLogo} alt={""} />
                    </div>
                    <div className="bg-[#4A4A4A] flex flex-col items-center md:w-1/5">
                        <Image className="py-2 self-center max-w-[40px]" src={FaxLogo} alt={""} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#d4121812] w-full">
                <Image className="my-5 self-center" src={CompanyLogo} alt="" />
                <div className="border border-red-500"></div>
                <hr className="h-[2px] bg-red-400 w-full" />
                <div className="flex flex-col md:flex-row">
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">About Cherry</h1>
                        <a href=""><p>Cherry in brief</p></a>
                        <a href=""><p>Cherry's History</p></a>
                        <a href=""><p>Responsible gaming</p></a>
                        <a href=""><p>Legal Structure</p></a>
                    </div>
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">Business Areas</h1>
                        <a href=""><p>Online Gaming – ComeOn!</p></a>
                        <a href=""><p>Gaming Technology - XCaliber</p></a>
                        <a href=""><p>Game development – Yggdrasil Gaming &
                            Highlights Games</p></a>
                        <a href=""><p>Performance-based Marketing – Game Lounge</p></a>
                        <a href=""><p>Restaurant Casino – Cherry Spelglädje</p></a>
                        <a href=""><p>Development Projects</p></a>
                    </div>
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">Corporate Governance</h1>
                        <a href=""><p>Corporate Governance</p></a>
                        <a href=""><p>General Meeting</p></a>
                        <a href=""><p>Annual General Meeting 2017</p></a>
                        <a href=""><p>Nomination Committee</p></a>
                        <a href=""><p>Boards of Directors</p></a>
                        <a href=""><p>Management Team</p></a>
                        <a href=""><p>Auditors</p></a>
                        <a href=""><p>Remunerations</p></a>
                        <a href=""><p>Incentive Programs</p></a>
                        <a href=""><p>Internal Control</p></a>
                        <a href=""><p>Minutes General Meetings</p></a>
                        <a href=""><p>Articles of Association</p></a>
                    </div>
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">Investors & Media</h1>
                        <a href=""><p>The Share</p></a>
                        <a href=""><p>Financial Reports</p></a>
                        <a href=""><p>Annual Reports</p></a>
                        <a href=""><p>Largest Shareholders</p></a>
                        <a href=""><p>Financial Targets</p></a>
                        <a href=""><p>Financial Calendar</p></a>
                        <a href=""><p>Analysts</p></a>
                        <a href=""><p>Investor Contact</p></a>
                        <a href=""><p>Press Releases</p></a>
                        <a href=""><p>Subscribe</p></a>
                        <a href=""><p>Press Photos</p></a>
                    </div>
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">Career</h1>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                    </div>
                    <div className="m-8">
                        <h1 className="text-[#D41217] font-bold uppercase">Career</h1>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                        <a href=""><p>Lorem ipsum</p></a>
                    </div>
                </div>

            </div>


        </div>
    );
}