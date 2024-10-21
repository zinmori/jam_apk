import { useState } from "react";

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-400 to-blue-200">
      <div className="mb-8">
        <img
          src="/logo.png"
          alt="App Logo"
          className="w-52 h-52 object-contain"
        />
      </div>

      <div className="text-blue-800 text-xl font-semibold">
        Download the JAM app here !
      </div>

      {isDownloaded && (
        <div className="mt-4 text-green-600 text-lg font-semibold flex flex-row items-center gap-2">
          <img src="/check.png" alt="" className="w-6" />
          Download complete !
        </div>
      )}

      <div className="mt-8">
        <a
          href="/jam.apk"
          download
          className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:bg-blue-900 flex flex-row items-center gap-4"
          onClick={() => {
            setIsDownloading(true);
            setIsDownloaded(false);
            setTimeout(() => {
              setIsDownloading(false);
              setIsDownloaded(true);
            }, 2000);
          }}
        >
          {isDownloading ? (
            <div className="w-6 h-6 rounded-full border-2 border-l-0 animate-spin"></div>
          ) : (
            <img src="/downloads.png" alt="" className="w-6" />
          )}
          Download
        </a>
      </div>
    </div>
  );
}

export default App;
