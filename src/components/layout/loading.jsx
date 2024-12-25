import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-[1000] text-white">
      <button
        type="button"
        className="bg-rose-500 flex items-center gap-2 p-3 rounded-lg"
        disabled
      >
        <FaSpinner className="animate-spin" />
      </button>
    </div>
  );
}
