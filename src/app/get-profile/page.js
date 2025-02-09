"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchGitHubProfile = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!userRes.ok) throw new Error("User not found");
      const user = await userRes.json();
      const repositories = await repoRes.json();

      setUserData(user);
      setRepos(repositories);
    } catch (err) {
      setError(err.message);
      setUserData(null);
      setRepos([]);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen text-white p-4 pb-24">
      {/* Search Bar */}
      <form
        onSubmit={fetchGitHubProfile}
        className="flex items-center mt-24 bg-gray-800 p-2 rounded-lg shadow-md w-full max-w-md"
      >
        <input
          type="text"
          className="bg-transparent flex-1 p-2 outline-none text-lg"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 111.42-1.42L21 21z"
            />
          </svg>
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* User Info Card */}
      {userData && (
        <div
          className="relative w-96 h-96 mt-6 cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open(
              `${userData?.html_url}`,
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <div className="absolute w-full h-full clip-hexagon bg-gray-700 flex flex-col items-center justify-center p-6 shadow-lg">
            <Image
              src={userData?.avatar_url}
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
            <h2 className="text-lg font-semibold mt-2">{userData?.name}</h2>
            <p className="text-sm text-gray-300 text-center">
              {userData?.bio?.substring(0, 25) ?? "No Bio"}...
            </p>
            <div className="flex justify-evenly w-full mt-2 text-sm">
              <span>👥 {userData?.followers} Followers</span>
              <span>🔁 {userData?.following} Following</span>
            </div>
          </div>
        </div>
      )}

      {/* Repositories List */}
      {repos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full max-w-5xl">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="relative bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <a
                href={repo.clone_url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-0.5 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg"
              >
                Clone
              </a>
              <h3 className="text-lg font-semibold">{repo?.name}</h3>
              <p className="text-sm text-gray-400">
                {repo?.description || "No description"}
              </p>
              <p className="text-sm mt-2 text-blue-300">
                {repo?.language || "Not Specified"}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Hexagon Clip Path */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
        }
      `}</style>
    </div>
  );
};

export default Page;
