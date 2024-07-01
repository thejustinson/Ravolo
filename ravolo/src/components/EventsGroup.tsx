import EventsFilter from "./EventsFilter"
import EventsGrid from "./EventsGrid"

const EventsGroup = () => {
  return (
    <div className="max-w-[960px] px-10 lg:px-0 mx-auto mt-10 pb-20">
      <EventsFilter/>
      <EventsGrid/>
    </div>
  )
}

export default EventsGroup
