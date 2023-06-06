import Image from "next/image"
import PdfImage from "../../app/assets/pdf.svg";
import XlsImage from "../../app/assets/xls.svg";
import ChartImage from "../../app/assets/tabs.svg";

export default function Events() {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col items-center p-8 bg-purple-400 w-full text-center text-white">
                <h1 className="font-bold mb-5 text-xl">Pressreleases</h1>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">PM 1 lorem ipsum dolor sit</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">PM 2 lorem ipsum dolor lorem ipsum sit amet Lorem ipsum.</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">PM 3 lorem ipsum dolor lorem ipsum sit amet</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">PM 4 lorem ipsum dolor lorem ipsum sit amet</h2>
                <button className="bg-white text-purple-400 w-4/5 rounded-md font-bold mt-12">Lorem Ipsum</button>
            </div>
            <div className="bg-orange-400 flex flex-col items-center p-8 w-full text-center text-white">
                <h1 className="font-bold mb-3">Calendar</h1>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">Event 1 lorem ipsum dolor sit</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">Event 2 lorem ipsum dolor lorem ipsum sit amet Lorem ipsum.</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">Event 3 lorem ipsum dolor lorem ipsum sit</h2>
                <p>July 10, 2017</p>
                <h2 className="font-bold mb-3">PM 3 lorem ipsum dolor lorem ipsum sit amet</h2>
            </div>
            <div className="bg-lime-600 flex flex-col items-center p-8 w-full text-white">
                <h1 className="font-bold mb-3">Cherry Interrim Report</h1>
                <p className="mb-5">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod. </p>
                <div className="flex self-start mb-2"><Image src={PdfImage} alt={""} className="mr-3" /><p className="text-white font-bold">Report Q2 2017</p></div>
                <div className="flex self-start mb-2"><Image src={PdfImage} alt={""} className="mr-3" /><p className="text-white font-bold">Presentation Q2 2017</p></div>
                <div className="flex self-start mb-2"><Image src={ChartImage} alt={""} className="mr-3" /><p className="text-white font-bold">Webcast Q2 2017</p></div>
                <div className="flex self-start mb-2"><Image src={XlsImage} alt={""} className="mr-3" /><p className="text-white font-bold">Financial data Q2 2017</p></div>
                <button className="bg-white text-lime-600 w-4/5 rounded-md font-bold mt-12">Lorem Ipsum</button>
            </div>
            <div className="bg-red-700 flex flex-col items-center p-8 w-full text-white">
                <h1 className="font-bold mb-3 text-2xl">The Share</h1>
                <p className="mb-5 font-semibold text-xl">NASDAQ OMXS (CHER B):</p>
                <p className="font-semibold text-4xl">59.50 SEK</p>
                <p className="mb-5 font-semibold text-4xl">+1.75%</p>
                <button className="bg-white text-red-700 w-4/5 rounded-md font-bold mt-12">Lorem Ipsum</button>
            </div>
        </div>


    );
}