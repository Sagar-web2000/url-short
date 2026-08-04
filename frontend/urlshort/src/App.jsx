import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("URL is required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8001/url", {
        url,
      });

      alert("URL Generated Successfully");
      setShortId(response.data.id);
      setUrl("");
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-[#161B22] rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          URL SHORTENER
        </h1>

        <form
          onSubmit={submitHandle}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter Your URL"
            className="flex-1 border border-green-500 bg-black text-green-400 p-3 rounded-md outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-green-600 hover:rounded-full active:scale-95"
          >
            Generate
          </button>
        </form>

        {shortId && (
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-2">Your Short URL</p>

            <a
              href={`http://localhost:8001/${shortId}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 underline break-all hover:text-green-300"
            >
              http://localhost:8001/{shortId}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;