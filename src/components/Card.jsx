import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          alt="image not available"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="truncate text-xl font-bold">
            {result.title || result.name}
          </h2>
          <p className="text-sm flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="ml-3 mr-1" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
