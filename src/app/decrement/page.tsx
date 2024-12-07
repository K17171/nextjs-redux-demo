'use client';

import Link from "next/link";
import { decrement } from "../../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const DecrementPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state: RootState) => state.counter.value);

    const handleClick = () => {
        dispatch(decrement());
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <h1 className="text-5xl font-bold mb-8">Decrement the Count</h1>
            <div className="text-center">
                <p className="text-2xl">Current Count:</p>
                <p className="text-8xl font-extrabold mt-4">{count}</p>
            </div>
            <button
                onClick={handleClick}
                className="mt-10 px-6 py-3 bg-gray-700 text-lg font-medium rounded-lg hover:bg-gray-800 transition"
            >
                Decrement
            </button>
            <div className="mt-10 flex space-x-4">
                <Link href="/increment" className="px-6 py-3 bg-green-500 text-lg font-medium rounded-lg hover:bg-green-600 transition">
                    Go to Increment Page
                </Link>
                <Link href="/" className="px-6 py-3 bg-blue-500 text-lg font-medium rounded-lg hover:bg-blue-600 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default DecrementPage;
