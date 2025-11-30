"use client";
import DocSidebar from "../components/sidebar";

export default function PiAsWifiAccessPoint() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">
        <DocSidebar
            items={[
                { id: "PicoWifiAccessPoint", label: "Overview" },
                { id: "features", label: "Features" },
                { id: "hardware", label: "Hardware" },
                { id: "installation", label: "Installation" },
                { id: "usage", label: "Connecting" },
                { id: "morse", label: "Morse Blinker" },
                { id: "stats", label: "System Stats" },
                { id: "demo", label: "Demo" },
                { id: "troubleshooting", label: "Troubleshooting" },
                { id: "customization", label: "Customization" },
                { id: "links", label: "Project Links" },
            ]}
            />


        {/* ───── CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none scroll-smooth">

          <h1 id="PicoWifiAccessPoint" className="text-4xl font-bold mb-6 scroll-mt-32">
            Pi as a WiFi Access Point
          </h1>

          <p>
            A concise MicroPython project that turns a Raspberry Pi Pico 2 W into a tiny WiFi access point with a built-in web UI.
            The interface lets you blink messages in Morse on the onboard LED and monitor basic system stats in real time.
            This was done as a hardware study. My boy got me a Pi and a breakout board, but I didn't have any other hobbyist gear, so here we are. It’s a solid base for future experiments:
            and in the future I want to try out lightweight reverse-proxying, inter-Pico communication, or a Next.js-hosted control panel (when I do get parts).
          </p>

          <section id="features" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Features</h2>
            <p>
              Project Capabilities:
            </p>
            <ul>
              <li><strong>WiFi AP Mode</strong> — Pico creates its own network that devices can join.</li>
              <li><strong>Morse Code Blinker</strong> — type text in the page and blink it on the LED.</li>
              <li><strong>Real-time Stats</strong> — temperature and memory readings update automatically.</li>
              <li><strong>Single-page interface</strong> — AJAX updates; no full page reloads required.</li>
            </ul>
          </section>

          <section id="hardware" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Hardware</h2>
            <p>Minimal requirements — everything runs on the Pico itself:</p>
            <ul>
              <li>Raspberry Pi Pico W (or Pico 2 W)</li>
              <li>Micro-USB cable for power</li>
              <li>A WiFi-capable client (laptop, phone, tablet)</li>
            </ul>
            <p className="italic mt-2">
              Note: I had mixed results on phones (iOS devices sometimes block unprotected APs). Desktop/laptop works reliably.
            </p>
          </section>

          <section id="installation" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Installation</h2>
            <ol>
              <li>Install MicroPython on the Pico (Thonny is convenient).</li>
              <li>Copy the project files to the board and save the main script as <code>main.py</code>.</li>
              <li>Edit the SSID/password if desired, for example:
                <pre className="bg-black/5 dark:bg-white/5 p-2 rounded mt-2"><code>ap_mode("Wi-Pi", "1234")</code></pre>
              </li>
              <li>Reboot the Pico and watch the serial console for the assigned IP (typically <code>192.168.4.1</code>).</li>
            </ol>
          </section>

          <section id="usage" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Connecting</h2>
            <p>Quick steps to access the web UI:</p>
            <ol>
              <li>Power the Pico and wait for the AP to start.</li>
              <li>Join the Pico’s WiFi network from your client device.</li>
              <li>Open a browser to the IP shown on the console (usually <code>192.168.4.1</code>).</li>
            </ol>
          </section>

          <section id="morse" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Morse Code Blinker</h2>
            <p>
              Enter letters, numbers or spaces in the web form and click <em>Blink LED</em>. The Pico will blink the message in Morse using non-blocking threading.
              Timing defaults are:
            </p>
            <ul>
              <li>Dot: 200 ms</li>
              <li>Dash: 600 ms (3 × dot)</li>
              <li>Inter-letter gap: 600 ms</li>
              <li>Inter-word gap: 1400 ms</li>
            </ul>
            <p className="mt-2">If you change speed, adjust the <code>dot_time</code> in <code>blink_morse()</code>.</p>
          </section>

          <section id="stats" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">System Stats</h2>
            <p>
              The interface polls a <code>/stats</code> endpoint (every ~2s) to display:
            </p>
            <ul>
              <li>Temperature (°C)</li>
              <li>Allocated / free / total memory</li>
              <li>Memory usage percentage</li>
            </ul>
            <p>Stats are returned as JSON and rendered live on the page.</p>
          </section>

          <section id="demo" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Demo</h2>
            <p className="mb-4">Animated demos (web UI and Pico LED):</p>
            <img src="pi/sos_web.gif" alt="Web UI demo" className="mb-4" width="500" />
            <img src="pi/sos_pi.gif" alt="Pico LED demo" />
          </section>

          <section id="api" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">API Endpoints</h2>
            <ul>
              <li><code>GET /</code> — main web interface</li>
              <li><code>GET /stats</code> — JSON system statistics</li>
              <li><code>GET /blink?text=YOUR_TEXT</code> — trigger a Morse blink</li>
            </ul>

            <p className="mt-4">Example <code>/stats</code> response:</p>
        <pre className="bg-black/5 dark:bg-white/5 p-3 rounded">
{`{
  "temp": 23.5,
  "free_mem": 123456,
  "alloc_mem": 34567,
  "total_mem": 158023,
  "mem_percent": 21.9
}`}
            </pre>
          </section>

          <section id="troubleshooting" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Troubleshooting</h2>
            <ul>
              <li><strong>No WiFi network:</strong> power-cycle the Pico and check the serial console for "AP Mode Is Active".</li>
              <li><strong>Cannot reach the page:</strong> confirm you are connected to the Pico AP and try <code>192.168.4.1</code>.</li>
              <li><strong>LED not blinking:</strong> ensure the text uses supported characters (A–Z, 0–9, spaces) and that a previous blink finished.</li>
              <li><strong>Stats not updating:</strong> check the browser console for JS errors and verify network connectivity to the board.</li>
            </ul>
          </section>

          <section id="customization" className="scroll-mt-32 ">
            <h2 className="text-3xl font-semibold mt-12">Customization</h2>

            <h3 className="text-xl font-medium mt-4">Change Morse speed</h3>
            <pre className="bg-black/5 dark:bg-white/5 p-2 rounded mt-2"><code>dot_time = 0.2  # seconds</code></pre>

            <h3 className="text-xl font-medium mt-4">Change stats interval</h3>
            <pre className="bg-black/5 dark:bg-white/5 p-2 rounded mt-2"><code>setInterval(updateStats, 2000)</code></pre>

            <h3 className="text-xl font-medium mt-4">WiFi settings</h3>
            <pre className="bg-black/5 dark:bg-white/5 p-2 rounded mt-2"><code>ap.config(essid=ssid, password=password)</code></pre>

            <p className="mt-6">This project is intentionally lightweight and designed to be easy to extend — proxying, inter-Pico comms, or a more advanced web front-end are natural next steps.</p>
          </section>

            <section id="links" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Project Links</h2>
            <ul>
              
              <li><a href="https://github.com/HarrisonChe5188/PicoWifiAccessPoint" className="text-blue-500">Github Repo</a></li>
            </ul>
          </section>   
        </main>
      </div>
    </div>
  );
}
