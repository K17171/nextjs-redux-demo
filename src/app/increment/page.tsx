'use client';

import { increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { RootState } from "../../redux/store";

const IncrementPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-500 to-teal-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Increment the Count</h1>
      <div className="text-center">
        <p className="text-2xl">Current Count:</p>
        <p className="text-8xl font-extrabold mt-4">{count}</p>
      </div>
      <button
        onClick={() => dispatch(increment())}
        className="mt-10 px-6 py-3 bg-yellow-500 text-lg font-medium rounded-lg hover:bg-yellow-600 transition"
      >
        Increment
      </button>
      <div className="mt-10">
        <Link href="/" className="px-6 py-3 bg-blue-500 text-lg font-medium rounded-lg hover:bg-blue-600 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default IncrementPage;
