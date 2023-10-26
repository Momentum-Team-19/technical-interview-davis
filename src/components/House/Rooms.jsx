import { useState } from 'react'

const Kitchen = () => {
  // lights can be 'on' or 'off'

  const toggleLight = () => {
    // switch light on/off
  }

  return (
    <div className="room grid-item">
      <h2>Kitchen</h2>
      <button>Kitchen</button>
    </div>
  )
}

const Bathroom = () => {
  // lights can be 'on' or 'off'

  const toggleLight = () => {
    // switch light on/off
  }

  return (
    <div className="room grid-item">
      <h2>Bathroom</h2>
      <button>Bathroom</button>
    </div>
  )
}

const LivingRoom = () => {
  // lights can be 'on' or 'off', but should be 'on' by default

  const toggleLight = () => {
    // switch light on/off
  }

  return (
    <div className="room grid-item">
      <h2>Living Room</h2>
      <button>Living Room</button>
    </div>
  )
}

const Bedroom = () => {
  // lights can be 'on' or 'off', but should be 'on' by default

  const toggleLight = () => {
    // switch light on/off
  }

  return (
    <div className="room grid-item">
      <h2>Bedroom</h2>
      <button>Bedroom</button>
    </div>
  )
}

export { Kitchen, Bathroom, LivingRoom, Bedroom }
