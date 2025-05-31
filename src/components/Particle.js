import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // ✅ Correct import

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main); // ✅ Load full tsParticles bundle
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "#0d0d0d",
        },
      }}
    />
  );
}

export default Particle;
