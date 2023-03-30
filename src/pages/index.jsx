import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { spotifyApi } from "./_app";
import Link from "next/link";

export default function Home() {
  const {
    data: playlists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: async () => (await spotifyApi.getUserPlaylists()).body.items,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error...</p>;

  return (
    <Layout>
      <div className="p-10">
        <h1 className="mb-12 text-4xl font-bold">Welcome to my Spotify </h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {playlists.map((playlist) => (
            <Link
              href={`/playlists/${playlist.id}`}
              key={playlist.id}
              className="rounded-md bg-bg p-4"
            >
              <img
                src={playlist.images[0]?.url}
                alt=""
                className="aspect-square"
              />
              <p className="mt-2 truncate text-sm">{playlist.name} </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
