import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction"

export const ScheduleManager = () => {
  return (
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth"
    weekends={false}
    events={[
      { title: 'Embarrassing React Demo', date: '2021-09-16' }
    ]}
    aspectRatio={2}
    />
  )
}
