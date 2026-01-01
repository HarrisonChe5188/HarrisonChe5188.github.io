"use client"
import DocSidebar from "../components/sidebar";

export default function AutoQueue() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">

        {/* ───── SIDEBAR ───── */}
        <DocSidebar
          items={[
            { id: "overview", label: "Overview" },
            { id: "features", label: "Features" },
            { id: "usage", label: "Usage" },
            { id: "configuration", label: "Configuration" },
            { id: "terminal", label: "Terminal Tool" },
            { id: "troubleshooting", label: "Troubleshooting" },
            { id: "links", label: "Project Links" },
          ]}
        />

        {/* ───── MAIN CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none">

          <h1 id="overview" className="text-4xl font-bold mb-6 scroll-mt-32">
            AutoQueue
          </h1>
          <p>
            AutoQueue started as a command-line tool that used OAuth to connect to your Spotify account.
            It would parse a YouTube video URL to detect songs mentioned in the description, then add them 
            to a Spotify playlist of your choosing or into a separate AutoQueue playlist. You could also 
            manually select which songs to include or exclude. It really came about because I was tired of
            copying and pasting song titles between YouTube and Spotify all the time, so I automated the process.
          </p>
          <br />
          <p>
            However, it isn't perfect. The song detection relies on the accuracy of the songs that Youtube automaticaly 
            generates in the description, so if a song is missing or misformatted, it might not be detected correctly. 
            Other times, it just flat out doesn't work for certain videos. But for the most part, it gets the job done!
          </p>
          <br />
          <p>
            Youtube doesn't provide an endpoint to directly get the songs in a video, so the tool is super finicky. If you can thing 
            of an edge case or a caveat I haven't handled, it most likely is one, and there's a good chance the tool won't work.
          </p>
          <br />
          <p>
            Writing this page now, I'm realizing that this tool really just sucks. Hell I hardcoded my secrets into the repo for easy access.
            But hey, it was a fun project to build and I learned a lot about OAuth flows, working with third-party APIs, and building web apps with Next.js.
            If I ever get around to it, I might try improving the song detection algorithm or adding support for other platforms like Apple Music or YouTube Music.
            If for some reason you want to use this tool, you're going to have to set up your own Spotify Dev app to get your own client ID and secret, while setting up your own redirect URIs (I used a localhost).
          </p>
          <br />
           <div className="text-center mb-6">
            <img src="autoqueue/youtube1.png" className="mx-auto rounded-lg w-[700]" />
            <img src="autoqueue/youtube2.png" className="mx-auto rounded-lg w-[700]" />
            <p className="mt-2 text-sm">This channel introduced me to the world of R&B, funk, soul, etc. I wanted to add them to Spotify playlists and the easiest solution I could think of was to rip them off of the description :)</p>
          </div>
          <section id="features" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Features</h2>
            <ul>
              <li>Parse YouTube video descriptions for recognized songs</li>
              <li>OAuth login to Spotify for secure playlist access</li>
              <li>Add songs automatically to a chosen Spotify playlist</li>
              <li>Optionally pick songs to include or exclude</li>
              <li>Web app interface for easier usage (no terminal needed)</li>
            </ul>
          </section>

          

          <section id="usage" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Usage</h2>
            <ol>
              <li>Login with your Spotify account using OAuth.</li>
              <li>Provide a YouTube URL containing song listings.</li>
              <li>Review the detected songs and choose which to include/exclude.</li>
              <li>Confirm to add the selected songs to your Spotify playlist.</li>
            </ol>
          </section>

          <section id="configuration" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Configuration</h2>
            <p>
              You can configure AutoQueue to:
            </p>
            <ul>
              <li>Choose a default Spotify playlist for auto-additions</li>
              <li>Enable or disable certain automatic parsing behaviors</li>
              <li>Customize the web app experience (theme, notifications, etc.)</li>
            </ul>
          </section>

          <section id="terminal" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Terminal Tool</h2>
            <p>
              The terminal tool allows you to do everything from the command line. 
              You can log in with Spotify, input YouTube URLs, review detected songs, and add them to your playlists—all without touching a terminal.
            </p>
            <img src="/autoqueue/autoqueue.png" className="mx-auto my-8 rounded-lg w-3/4" />
          </section>

          <section id="troubleshooting" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Troubleshooting</h2>
            <ul>
              <li>Spotify OAuth fails: ensure your client ID and redirect URI are correct.</li>
              <li>No songs detected: make sure the YouTube description contains recognizable track info.</li>
              <li>Playlist not updated: check your Spotify account permissions.</li>
            </ul>
          </section>

          <section id="links" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-semibold mt-12">Project Links</h2>
            <ul>
              <li><a href="https://github.com/HarrisonChe5188/AutoQueue" target="_blank" className="text-blue-500 hover:underline">GitHub repository to the terminal tool</a></li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
