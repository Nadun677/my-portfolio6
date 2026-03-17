import Particles from "react-tsparticles"

function ParticlesBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        options={{
          background: {
            color: { value: "transparent" }
          },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#a855f7" },
            links: {
              enable: true,
              color: "#a855f7",
              distance: 150
            }
          }
        }}
      />
    </div>
  )
}

export default ParticlesBg