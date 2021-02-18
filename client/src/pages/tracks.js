import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import QueryResult from "../components/query-result";
import TrackCard from "../containers/track-card";

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

const SPACECATS = gql`
  query ListSpaceCats {
    spaceCats {
      name
      age
      missions {
        name
        description
      }
    }
  }
`;
const AddCat = gql`
  mutation AddCat {
    AddCat(name: "mio") {
      title
      missions
    }
  }
`;

/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
      <Adder />
    </Layout>
  );
};

const Adder = () => {
  return (
    <div>
      <input />
      <button>Add</button>
    </div>
  );
};

export default Tracks;
