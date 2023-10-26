import './House.css'
import { Kitchen, Bathroom, LivingRoom, Bedroom } from './Rooms'

const House = () => {
  return (
    <div className="house">
      <h1 className="text-heading">House Party</h1>
      <div className="grid-container">
        <Kitchen />
        <Bathroom />
        <LivingRoom />
        <Bedroom />
      </div>
    </div>
  )
}

export default House
