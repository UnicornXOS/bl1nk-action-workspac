// ===== GOOGLE CALENDAR API =====

function createCalendarEvent(title, startTime, endTime, description) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  const event = calendar.createEvent(title, startTime, endTime, {
    description: description,
    location: 'ออนไลน์'
  });
  
  logInfo('สร้างกิจกรรม: ' + event.getId());
  return event.getId();
}

function getEventsInRange(startDate, endDate) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  const events = calendar.getEvents(startDate, endDate);
  
  Logger.log(`📅 กิจกรรมจาก ${startDate} ถึง ${endDate}:`);
  
  events.forEach(event => {
    Logger.log(`  ⏰ ${event.getTitle()}`);
    Logger.log(`     เวลา: ${event.getStartTime()} - ${event.getEndTime()}`);
    Logger.log(`     สถานที่: ${event.getLocation()}`);
  });
  
  return events;
}

function updateCalendarEvent(eventId, newTitle, newDescription) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  const events = calendar.getEvents(
    new Date(2025, 0, 1),
    new Date(2026, 0, 1)
  );
  
  const event = events.find(e => e.getId() === eventId);
  
  if (event) {
    event.setTitle(newTitle);
    event.setDescription(newDescription);
    logInfo('อัปเดตกิจกรรม: ' + eventId);
  } else {
    logError('ไม่พบกิจกรรม');
  }
}

function deleteCalendarEvent(eventId) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  const events = calendar.getEvents(
    new Date(2025, 0, 1),
    new Date(2026, 0, 1)
  );
  
  const event = events.find(e => e.getId() === eventId);
  
  if (event) {
    event.deleteEvent();
    logInfo('ลบกิจกรรม: ' + eventId);
  }
}

function addGuestToEvent(eventId, guestEmail) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  const events = calendar.getEvents(
    new Date(2025, 0, 1),
    new Date(2026, 0, 1)
  );
  
  const event = events.find(e => e.getId() === eventId);
  
  if (event) {
    event.addGuest(guestEmail);
    logInfo('เพิ่มผู้เข้าร่วม: ' + guestEmail);
  }
}
