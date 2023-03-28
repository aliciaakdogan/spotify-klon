import Layout from "@/components/Layout";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { spotifyApi } from "../_app";
import { useRouter } from "next/router";

export default function Playlist() {
  const router = useRouter();

  const {
    data: playlist,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlists", router.query.id],
    queryFn: async () => (await spotifyApi.getPlaylist(router.query.id)).body,
  });
  console.log(playlist);

  if (isLoading) return <Layout>loading...</Layout>;
  if (isError) return <Layout>error...</Layout>;

  return (
    <Layout>
      <div className="p-10">
        <div className="flex gap-3">
          <img
            src={playlist.images[0].url}
            alt="playlist image"
            className="h-20 w-20 flex-shrink-0 "
          />
          <div>
            <p className="font-semibold text-text-dimmed">Playlist</p>
            <h2 className="text-3xl font-semibold">{playlist.name}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
