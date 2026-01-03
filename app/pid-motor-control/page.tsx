"use client"
import DocSidebar from "../components/sidebar";

export default function PIDMotorControl() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">

        {/* ───── SIDEBAR ───── */}
        <DocSidebar
          items={[
            { id: "objective", label: "Objective" },
            { id: "engineering approach", label: "Engineering Approach" },
            { id: "results and takeaways", label: "Results and Takeaways" },
            { id: "links", label: "Project Links" },
          ]}
        />

        {/* ───── MAIN CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none">

          <h1 id="objective" className="text-4xl font-bold mb-6 scroll-mt-32">
            PID Motor Control
          </h1>
          <p>
            The primary goal of this project is to transport a tall block without toppling from point to point for a variable distance. 
            We will ensure that the block is transported using a stable system without any supports through clever Arduino coding and vehicle design. 
          </p>
          <h2 id="engineering approach" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Engineering Approach
          </h2>
          <br />

          <p>
          The preliminary step of the project was to test the max realistic speed of the vehicle. This was achieved using SOLIDWORKS motion analysis 
          to confirm the block stays on the vehicle by keeping track of the reaction force. Using a=g*L/W, we know the max possible acceleration to be 
          0.82m/s^2 which translates to a max velocity of 1.57m/s. However, this speed was far too fast as the motion analysis indicated the block had fallen off.
          <br />
          <br />
          <img src="pid/pidgif.gif" width="50%" className="mx-auto" />
          </p>
          <br />
          
          <p>
          By adjusting the speed settings in the motor settings until the block no longer would fall off the vehicle, I settled on the maximum acceleration value 
          of 0.637m/s^2, with top velocity of 1.38 m/s and a total time of 8.68s for a 10ft track (as pictured). Naturally, the simulation assumes the best possible
          variables for this top speed. We do not actually expect the true race time to be in the single digits. 
          </p>
          <br />
          <img src="pid/pid2.png" />
          <br />
          <p>
            For my final design, I added treads and included a proper motor holder for a sideway connection via a pulley belt. I also reduced the size by 40% to reduce 
            added torque on the motor. This was one was quite a pain to apply motion analysis to. 
          </p>
          <br />
          <img src="pid/pid3.jpg" width="50%" className="mx-auto"/>

          <h2 id="results and takeaways" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Results and Takeaways
          </h2>
          <br />
          <p>
            In the end, we used rubber loops for better traction instead of treads. Using a proportional integral derivative control method for the Arduino, we were able to 
            create a smooth velocity profile for the car. After a couple of hours of trial and error, we found the sweet spot to be about 15 seconds. This is a fair bit longer 
            than the motion analysis but such inaccuracies are to be expected. 
          </p>
           <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <img
              src="pid/pid4.jpg"
              alt="PID control graph"
              className=" w-full md:w-1/2 object-cover"
              style={{ maxHeight: '360px' }}
            />

            <div className="w-full md:w-1/2">
              <video
                controls
                playsInline
                className=" w-full object-cover"
                style={{ maxHeight: '360px' }}
              >
                <source
                  src="pid/pidvid.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <section id="links" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-semibold mt-12">Project Links</h2>
            <ul>
              <li><a href="https://drive.google.com/file/d/1Msq2AId4lkh8WiF6qyHX3yxdgDuE92Fb/view" target="_blank" className="text-blue-500 hover:underline">Motion Study Zip</a></li>
              <li><a href="https://drive.google.com/file/d/1Lhy4_zY3FpilJda7RGrdASSAo0HmkzXn/view" target="_blank" className="text-blue-500 hover:underline">Personal Car Design</a></li>

            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
