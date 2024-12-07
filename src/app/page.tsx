'use client';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset } from "../redux/features/counterSlice";
import Link from "next/link";
import { RootState } from "../redux/store";

const CountPage: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(reset());
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to the Counter App</h1>
      <div className="text-center">
        <p className="text-2xl">Current Count:</p>
        <p className="text-8xl font-extrabold mt-4">{count}</p>
      </div>
      <div className="mt-10 flex space-x-4">
        <Link href="/increment" className="px-6 py-3 bg-green-500 text-lg font-medium rounded-lg hover:bg-green-600 transition">
          Go to Increment Page
        </Link>
        <Link href="/decrement" className="px-6 py-3 bg-red-500 text-lg font-medium rounded-lg hover:bg-red-600 transition">
          Go to Decrement Page
        </Link>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-700 text-lg font-medium rounded-lg hover:bg-gray-800 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountPage;
