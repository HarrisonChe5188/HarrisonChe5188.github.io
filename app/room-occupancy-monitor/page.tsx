"use client"
import DocSidebar from "../components/sidebar";

export default function RoomOccupancyMonitor() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">

        {/* ───── SIDEBAR ───── */}
        <DocSidebar
          items={[
            { id: "objective", label: "Objective" },
            { id: "engineering approach", label: "Engineering Approach" },
            { id: "results and takeaways", label: "Results and Takeaways" },
          ]}
        />

        {/* ───── MAIN CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none">

          <h1 id="objective" className="text-4xl font-bold mb-6 scroll-mt-32">
            Room Occupancy Monitor
          </h1>
        <p>
            For EK210 "Intro to Engineering Design" our group focused on making a single product and spent the entire semester iterating and 
            prototyping until we had a competent design for daily use. This Room Occupancy monitor was developed with the purpose of combating 
            the spread of COVID-19 by keeping count of a room's current population and giving out an alert when the room capacity is reached.
          </p>
          <h2 id="engineering approach" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Engineering Approach
          </h2>
          <br />

          <p>
          Fill block in here
          <br />
          <br />
          <img src="room-occupancy-monitor/r4.png" width="50%" className="mx-auto" />
          </p>
          <br />
          
          <p>
          Fill block in here
          </p>
          <br />
          <img src="room-occupancy-monitor/r5.png" width="50%" className="mx-auto"/>
          <br />
          <p>
            Fill block in here
          </p>
          <br />
          <img src="room-occupancy-monitor/r2.png" width="50%" className="mx-auto"/>
            <p>
            Fill block in here
          </p>
          <br />
          <img src="room-occupancy-monitor/r3.png" width="50%" className="mx-auto"/>

          <h2 id="results and takeaways" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Results and Takeaways
          </h2>
          <br />
          <p>
            Fill in this block
          </p>
          <br />
          
           <div className="mx-auto max-w-5xl">
            <div className="relative w-full aspect-[5/4]">
                <iframe
                src="https://www-ccv.adobe.io/v1/player/ccv/AZuuIj59A6i/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ border: 0, outline: "none" }}
                />
            </div>
            </div>



         

        </main>
      </div>
    </div>
  );
}
