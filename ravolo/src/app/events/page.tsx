"use client"
import EventsGroup from "@/components/EventsGroup"
import NavBar from "@/components/Universal Components/NavBar"

const events = () => {
  return (
    <main className='min-h-screen'>
      <NavBar/>
      <EventsGroup/>
    </main>
  )
}

export default events
