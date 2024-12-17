import { TextInput } from "@mantine/core";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    searchParams.set("search", search);
    setSearchParams(searchParams);
  };
  const BtnSearch = () => {
    return (
      <button
        className="p-2 rounded-md bg-sky-500 hover:bg-sky-600 duration-150"
        onClick={handleSearch}
      >
        <IoSearchOutline size={14} className="text-white" />
      </button>
    );
  };

  return (
    <div className="w-[50%] lg:w-[30%]">
      <TextInput
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        radius={"md"}
        leftSectionPointerEvents="none"
        rightSection={<BtnSearch />}
        placeholder="Search"
      />
    </div>
  );
};

export default InputSearch;
