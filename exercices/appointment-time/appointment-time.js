// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  //if now has no value, now = current time
  now = now ? now : new Date().getTime()
  //basic answer
  return new Date(now + days * 24 * 60 * 60 * 1000 
      //handle the hour offset (from the test suite)
    + (new Date(now + days * 24 * 60 * 60 * 1000).getTimezoneOffset() - new Date(now).getTimezoneOffset()) * 60 * 1000)
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return new Date(appointmentDate).toISOString().toString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let wantedDate = new Date(timestamp)
  return {
    year : wantedDate.getFullYear(),
    month : wantedDate.getMonth(),
    date : wantedDate.getDate(),
    hour : wantedDate.getHours(),
    minute : wantedDate.getMinutes()
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let wantedDate = new Date(timestamp)
  let result = new Date (
    options.year != null ? options.year : wantedDate.getFullYear(),
    options.month != null? options.month : wantedDate.getMonth(),
    options.date != null ? options.date : wantedDate.getDate(),
    options.hour != null ? options.hour : wantedDate.getHours(),
    options.minute != null ? options.minute : wantedDate.getMinutes()
  )
  return{
    year : result.getFullYear(),
    month : result.getMonth(),
    date : result.getDate(),
    hour : result.getHours(),
    minute : result.getMinutes()
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.ceil((new Date(timestampB).getTime() - new Date(timestampA).getTime())/1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return appointmentTimestamp > currentTimestamp
}
