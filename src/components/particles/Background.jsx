import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 550
                }
            },
            color: {
                value: "#E4C88E"
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.8,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                    enable: true,
                    speed: 9,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: ["grab"]
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 300,
                    line_linked: {
                        opacity: 1
                    }
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true,
        background: {
            color: "#111",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    }}
    />
   );
}

export default ParticlesBackground;
