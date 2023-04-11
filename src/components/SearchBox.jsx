"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router  = useRouter();
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full h-14 rounded-sm placholder-gray-500 outline-none bg-transparent flex-1"
          type="text"
          placeholder="Search keywords..."
        />
        <button disabled={!search} className="text-amber-600 disabled:text-gray-400" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
