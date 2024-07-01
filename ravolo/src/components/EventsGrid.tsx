import EventsCard from "./EventsCard"

const EventsGrid = () => {
  return (
    <div className="max-w-full grid lg:grid-cols-2 gap-5">
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
    </div>
  )
}

export default EventsGrid