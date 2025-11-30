"use client";

import DocSidebar from "../components/sidebar";

export default function ModularRedstoneCircuit() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">

        {/* ───── SIDEBAR ───── */}
        <DocSidebar
          items={[
            { id: "overview", label: "Project Overview" },
            { id: "how-it-works", label: "How It Works and How it was Created" },
            { id: "hardware", label: "Hardware & Materials" },
            { id: "code-setup", label: "Code & Circuit Setup" },
            { id: "diagram", label: "Circuit Diagram" },
            { id: "images", label: "Project Images" },
            { id: "future", label: "Future Improvements and Links" },
            
          ]}
        />

        {/* ───── MAIN CONTENT ───── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none scroll-smooth">

          <h1 id="the-gang" className="text-4xl font-bold mb-6 scroll-mt-32">
            Redstone Rewired
          </h1>
          

          <section id="overview" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Project Overview</h2>
            <p>
              Submitted for Boston University's annual Lutron Lighting Competition, this project brings <strong>Minecraft redstone circuits to life</strong> using an 
              <strong> Arduino</strong>, basic electronics, and <strong>snap-on wire connectors</strong> to create a modular system. We also ended up winning first place in the competition!
            </p>
            <div className="text-center mb-6">

            <img src="redstone/first.png" className="mx-auto rounded-lg w-[500px]" />
            <p className="mt-2 text-sm">A low-res picture I ripped off BU's site. We won first!</p>
            </ div>
            <br />
            <p>The components replicate Minecraft mechanics, including:</p>
            <br />
            <ul>
              <li>Redstone Torch</li>
              <li>Redstone Lamp</li>
              <li>Lever</li>
              <li>Piston (Arduino-controlled Servo)</li>
              <li>Wooden Slab</li>
            </ul>
            <p>Snap-on connectors allow easy assembly and reconfiguration—just like placing blocks in Minecraft!</p>
          </section>
          <br />
        <div className="text-center mb-6">
            <img src="/gang.png" className="mx-auto rounded-lg" />
            <p className="mt-2 text-sm">From left to right: Nick, Nick, Harrison, and Ezan (in spirit).</p>
          </div>
          <section id="how-it-works" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">How It Works and How it Was Created</h2>
            <ul>
              <li>The lever toggles the circuit on/off.</li>
              <li>Redstone torch provides continuous power when placed.</li>
              <li>Redstone lamp lights up when powered.</li>
              <li>Piston moves when circuit is powered via Arduino + servo.</li>
              <li>Snap-on connectors allow modular assembly.</li>
            </ul>
            <br />
            <p>The parts were made out of lasercut wood and 3D prints.</p>
            <br />
            <p>
                 To get the Minecraft wood texture for the slab, I vectorized one face of a wooden block and laser etched the pattern into the wood.
            </p>
            <br />
            <p>
              The piston is controlled by an Arduino running custom code that smoothly moves a servo motor between 0° and 63° when the lever is toggled, simulating piston movement in Minecraft.
            </p>
            <br />
            <p>The redstone lamp is also made out of painted lasercut wood, but to get the stained glass effect, I sandwiched a thin square of acrylic, a printout of the lamp texture, and a thin sqaure of orange plastic.
                And when illuminated from behind by an LED, it gives a nice glowing effect, and was byfar the most aesthetic component of the build.
                </p>
            <br />
            <p>
                The redstone torch uses a simple LED circuit with a resistor to limit current, ensuring the LED lights up safely when powered. The torch was also 3D printed and painted to resemble the in-game item. 
            </p>
            <br />
            <p>The lever was, funnily enough, a real light switch. We replaced the physical switch with a 3D printed part so that we could attach a our own lever to it, all so we get a satisfying click. We also 3D printed housing and painted over it to match the game's lever.

            </p>
            <br />
            <p>
              Snap-on wire connectors made it easy to connect components without soldering, allowing for quick assembly and reconfiguration of the circuit—just like placing blocks in Minecraft!
            </p>
            <br />
            

          </section>

          <section id="hardware" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Hardware & Materials</h2>
            
            <ul>
              <li>Arduino (Uno/Nano/etc.)</li>
              <li>Servo Motor</li>
              <li>LEDs (for torch & lamp)</li>
              <li>Resistors</li>
              <li>Push Button / Toggle Switch (for lever)</li>
              <li>Wood/Plastic pieces (modular design)</li>
              <li>Snap-on wire connectors</li>
              <li>Jumper Wires & Soldering Kit</li>
            </ul>
          </section>

          <section id="code-setup" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Code & Circuit Setup</h2>
            
            <h3 className="text-2xl font-semibold mt-6">Arduino Servo Code</h3>
            <pre className="bg-black/5 dark:bg-white/5 p-3 rounded">
    <code>
{`#include <Servo.h>  

Servo myservo;  // create servo object to control a servo
int pos = 0;    // variable to store servo position
unsigned long startMillis;
bool buttonState = false;
bool lastButtonState = false;

void setup() {
  myservo.attach(9);  // attach servo to pin 9
  Serial.begin(9600); // start serial communication
  pinMode(6, INPUT);  // button input
}

void loop() {
  buttonState = digitalRead(6);

  // Move servo when button is pressed
  if (buttonState == HIGH && lastButtonState == LOW) {
    startMillis = millis();
    while (buttonState == HIGH) {
      int elapsedTime = millis() - startMillis;
      if (elapsedTime <= 250) {
        pos = map(elapsedTime, 0, 250, 0, 63);
        myservo.write(pos);
      } else break;
      buttonState = digitalRead(6);
    }
  }

  // Return servo to 0 when button released
  if (buttonState == LOW && lastButtonState == HIGH) {
    startMillis = millis();
    while (buttonState == LOW) {
      int elapsedTime = millis() - startMillis;
      if (elapsedTime <= 250) {
        pos = map(elapsedTime, 0, 250, 63, 0);
        myservo.write(pos);
      } else break;
      buttonState = digitalRead(6);
    }
  }

  lastButtonState = buttonState;
}`}
    </code>
  </pre>  
  <p className="mt-4">
    <strong>Explanation:</strong>  
    < br />
    This code reads a button input and smoothly moves a servo motor between 0° and 63° over 250ms when pressed, then returns to 0° when released. The servo controls the piston, creating the modular redstone movement in sync with your circuit.
  </p>
          </section>

          <section id="diagram" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Circuit Diagram</h2>
            <div className="text-center my-6">
              <img src="redstone/tink.png" className="mx-auto rounded-lg" />
            </div>
          </section>
        <section id="code-setup" className="scroll-mt-32">
  

  


</section>
          <section id="images" className="scroll-mt-32">
            <h2 className="text-3xl font-semibold mt-12">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="redstone/pist.jpg" className="rounded-lg" />
              <img src="redstone/pluh.jpg" className="rounded-lg" />
              <img src="redstone/noflick.jpg" className="rounded-lg" />
              <img src="redstone/flick.jpg" className="rounded-lg" />
            </div>
          </section>


          <section id="future" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-semibold mt-12">Future Improvements and Links</h2>
            <ul>
              <li>Add more redstone components (repeaters, comparators)</li>
              <li>Have the redstone torch to turn off when the "block" its attached to is powered</li>
              <li>Improve modularity with 3D-printed casings</li>
              <li>Integrate with a larger Minecraft-inspired automation system</li>
            </ul>
            <br />
            <ul>
            <li><a href="https://github.com/HarrisonChe5188/Redstone-Rewired" className="text-blue-500">Github Repo</a></li>

              <li><a href="https://www.bu.edu/eng/academics/teaching-and-innovation/singh-imagineering-lab-silab/competitions/lutron-lighting-competition/" className="text-blue-500">BU ENG 2025 Lutron Lighting Competition Site</a></li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
