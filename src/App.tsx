import clock from "/img/clolck.png";
import { FaListOl } from "react-icons/fa6";
import { useRef, useState } from "react";
import { BsCaretRightSquareFill } from "react-icons/bs";

/*
1. Show me seven o’clock.
2. Show me ten past four
3. Show me a half past nine
4. Show me a quarter to six
5. Show me ten to seven


*/

const question = [
    {
        title: "Question 1",
        question: "Show me seven oclock.",
    },
    {
        title: "Question 2",
        question: "Show me ten past four",
    },
    {
        title: "Question 3",
        question: "Show me a half past nine",
    },
    {
        title: "Question 4",
        question: "Show me a quarter to six",
    },
    {
        title: "Question 5",
        question: "Show me ten to seven",
    },
];

export default function App() {
    const [hour, setHour] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [random, setRandom] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handle_minutes = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setMinutes((prevMinutes) => prevMinutes + 5);
            }, 100);
        }
    };

    const handle_hour = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setHour((prevHour) => prevHour + 5);
            }, 100);
        }
    };

    const clear_interval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const set_question = () => {
        let mathRandom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        if (random === mathRandom) {
            mathRandom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        } else {
            setRandom(mathRandom);
        }
    };

    return (
        <div className="w-screen h-screen bg-amber-50 grid grid-cols-1 justify-center items-center p-5">
            <div className="w-full sm:w-96 2xl:w-[40rem] m-auto bg-white shadow-md 2xl:shadow-xl p-2 2xl:p-5 rounded-md">
                <h1 className="bg-teal-800 text-white font-semibold text-center py-2 rounded-tl-md rounded-tr-md 2xl:text-2xl">
                    Telling Time
                </h1>
                <div className="p-2 border-4 border-teal-800 text-[16px]">
                    <img
                        src={clock}
                        alt="Clock"
                    />
                    <div
                        className="h-[100px] 2xl:h-[180px] w-2 bg-blue-900 absolute left-[49%] bottom-[55%] sm:bottom-[58%] 2xl:bottom-[55%] md:left-[49.5%] lg:left-[49.3%] xl:left-[49.6%] 2xl:left-[49.7%] origin-bottom transition-all duration-100 z-10"
                        style={{ transform: `rotate(${minutes}deg)` }}
                    ></div>
                    <div
                        className="h-[80px] 2xl:h-[120px] w-2 absolute bg-green-700 left-[49%] bottom-[55%] sm:bottom-[58%] 2xl:bottom-[55%] md:left-[49.5%] lg:left-[49.3%] xl:left-[49.6%] 2xl:left-[49.7%] origin-bottom transition-all duration-100"
                        style={{ transform: `rotate(${hour}deg)` }}
                    ></div>
                    <div className="w-6 h-6 2xl:w-7 2xl:h-7 bg-slate-900 rounded-[50%] absolute z-30 bottom-[54%] sm:bottom-[56.5%] 2xl:bottom-[53.5%] 2xl:left-[49.2%] left-[47.2%] md:left-[48.3%] xl:left-[49%]"></div>
                </div>
                <div className="p-2 border-4 border-t-0 border-teal-800 flex justify-between items-center gap-4">
                    <button
                        onClick={set_question}
                        className="bg-amber-600 hover:bg-amber-500 py-2 px-4 text-white rounded-sm shadow transition-all duration-300 hover:scale-105"
                    >
                        <FaListOl />
                    </button>
                    <button
                        onTouchStart={handle_minutes}
                        onTouchMove={clear_interval}
                        onTouchEnd={clear_interval}
                        onMouseDown={handle_minutes}
                        onMouseUp={clear_interval}
                        onMouseLeave={clear_interval}
                        className="bg-blue-800 hover:bg-blue-700 py-2 px-4 text-white rounded-sm shadow transition-all duration-300 hover:scale-105 grow flex justify-center items-center"
                    >
                        <BsCaretRightSquareFill />
                    </button>
                    <button
                        onTouchStart={handle_hour}
                        onTouchMove={clear_interval}
                        onTouchEnd={clear_interval}
                        onMouseDown={handle_hour}
                        onMouseUp={clear_interval}
                        onMouseLeave={clear_interval}
                        className="grow flex justify-center items-center bg-green-700 hover:bg-green-600 py-2 px-4 text-white rounded-sm shadow transition-all duration-300 hover:scale-105"
                    >
                        <BsCaretRightSquareFill />
                    </button>
                </div>
                <div className="border-4 border-teal-800 border-t-0 rounded-bl-md rounded-br-md p-2 bg-amber-100">
                    <h1 className="text-center font-semibold text-2xl">
                        {random !== 0
                            ? question[random - 1].title
                            : "Random Question"}
                    </h1>
                    <p className="text-center text-3xl">
                        {random !== 0
                            ? question[random - 1].question
                            : "Please enter the random button!"}
                    </p>
                </div>
            </div>
        </div>
    );
}

// import { useState, useRef } from "react";

// export default function App() {
//     const [count, setCount] = useState<number>(0);
//     const intervalRef = useRef<NodeJS.Timeout | null>(null);

//     const startIncreasing = () => {
//         if (!intervalRef.current) {
//             // Pastikan tidak ada interval lain yang aktif
//             intervalRef.current = setInterval(() => {
//                 setCount((prevCount) => prevCount + 1);
//             }, 100);
//         }
//     };

//     const stopIncreasing = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null; // Reset setelah menghentikan interval
//         }
//     };

//     return (
//         <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
//             <button
//                 className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
//                 onTouchStart={startIncreasing}
//                 onTouchEnd={stopIncreasing}
//                 onMouseDown={startIncreasing}
//                 onMouseUp={stopIncreasing}
//                 onMouseLeave={stopIncreasing} // Hentikan saat mouse keluar dari tombol
//             >
//                 Tekan & Tahan ({count})
//             </button>
//         </div>
//     );
// }
