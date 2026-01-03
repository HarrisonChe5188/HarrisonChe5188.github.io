"use client"
import DocSidebar from "../components/sidebar";

export default function TemperatureIndicator() {
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
            Temperature Indicator
          </h1>
          <p>
            The primary goal of this project is to build a temperature sensor that uses a TMP36 to measure temperature as voltage, 
            converts the reading, and displays it on an LCD, triggering an LED and buzzer alert when the temperature exceeds ~80°F.
          </p>
          <h2 id="engineering approach" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Engineering Approach
          </h2>
          <br />

          <p>
          Fill block in here
          <br />
          <br />
          <img src="temperature-indicator/t4.png"   className="mx-auto" />
          </p>
          <br />
          
          <p>
          Fill block in here
          </p>
          <br />
          <img src="temperature-indicator/t3.jpg" className="mx-auto"/>
          <br />
          <p>
            For my final design, I added treads and included a proper motor holder for a sideway connection via a pulley belt. I also reduced the size by 40% to reduce 
            added torque on the motor. This was one was quite a pain to apply motion analysis to. 
          </p>
          <br />
          <img src="temperature-indicator/t2.jpg" className="mx-auto"/>

          <h2 id="results and takeaways" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Results and Takeaways
          </h2>
          <br />
          <p>
            Fill in this block
          </p>
          <br />
            <iframe
              className="block mx-auto"
              src="https://www-ccv.adobe.io/v1/player/ccv/MezrwmINeFa/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
              width="640"
              height="360"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ border: 0, outline: "none" }}
            />


         

        </main>
      </div>
    </div>
  );
}
