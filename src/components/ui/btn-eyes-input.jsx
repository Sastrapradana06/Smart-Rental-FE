/* eslint-disable react/prop-types */
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const BtnEyesInput = ({ state, setState }) => {
  return (
    <button className="cursor-pointer" onClick={() => setState(!state)}>
      {state ? <FaEyeSlash size={25} /> : <IoEyeSharp size={25} />}
    </button>
  );
};

export default BtnEyesInput;
