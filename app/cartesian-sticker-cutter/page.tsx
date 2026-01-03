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
          ]}
        />

        {/* ───── MAIN CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none">

          <h1 id="objective" className="text-4xl font-bold mb-6 scroll-mt-32">
            Cartesian Sticker Cutter
          </h1>
          <p>
            The main goal of this project was to create a sticker cutting machine powered by a series of stepper motors. The 8020 aluminum 
            extrusion bars were used as the main frame of the machine, cut down to fit in a 12x12in area. Four nema17 stepper motors to control 
            the x-y-z movement of the machine through a system of pulleys and belts (2 motors were connected via breadboard for the x-axis to synchronize movement). 
            A acrylic plate was used as a platform to secure sticker paper.  
          </p>
          <h2 id="engineering approach" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Engineering Approach
          </h2>
          <br />

          <p>
          Our main control unit was an MKS maker board that could independently issue commands to each motor for smooth multi-axis movement. The end effector was a 
          sticker cutting blade from another source as blade forging was outside the purview of this project. Custom made carriage and pulley parts (black, red & white) 
          were made on SOLIDWORKS and 3D printed. The end effector carriage in particular required precise measurement for vertical movement due to the thickness of the sticker paper.  
          
          </p>
          
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="sticker-cutter/s2.jpg" />
              <img src="sticker-cutter/s3.jpg" />
            </div>
         
          <br />
          
          <p>
          We went through many iterations of carriage designs (my prototype on the left) due to scaffolding issues (red). The dilemma would force us to choose between a carriage that
          wouldn't slide properly due to rough surfaces or a carriage that can't fit a belt because of broken teeth. Eventually a team member bought a 3D printer and produced higher
          quality parts with no defects (black & white).
          </p>
          <br />
          <img src="sticker-cutter/s4.png" width="50%" className="mx-auto"/>
          <br />
          <p>
            We had a pretty easy time with the code because our machine operated like a mini CNC mill. The machine moved the blade using GCODE inputted from Repetier-Host. 
            We used f-engrave to produce this GCODE from provided DXF files.
          </p>
     

          <h2 id="results and takeaways" className="text-3xl font-semibold mt-12 scroll-mt-32">
            Results and Takeaways
          </h2>
          <br />
          <p>
            The only issue with this setup is the lack of negative coordinates due to our origin system being located in the bottom left corner. This means that designs must be
            centered in the 12x12in area to be cut properly. Overall, the machine performed well and was able to cut various sticker materials with high accuracy. 
            Future improvements could include adding a camera system for better alignment and implementing a more robust blade changing mechanism for different cutting needs. 
          </p>
          <br />
         <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
            <iframe
              title="Sticker Cutter Video"
              src="https://www-ccv.adobe.io/v1/player/ccv/6u3DC8gts3p/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0 outline-none"
              style={{ border: 0, outline: "none" }}
            ></iframe>
          </div>


          

        </main>
      </div>
    </div>
  );
}
