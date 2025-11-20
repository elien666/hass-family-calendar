import React from 'react'
import logger from './logger'

const Reload = () => {
    
    /**
     * Sets a timeout to execute a callback function at a specific time of day.
     *
     * @param {function} callback The function to execute when the timeout is reached.
     * @param {string} timeOfDay The time of day in HH:MM format (e.g., "08:30", "14:00").
     * @returns {number} The timeout ID, which can be used to clear the timeout with clearTimeout().
     * @throws {Error} If the timeOfDay format is invalid.
     */
    function setTimeOfDayTimeout(callback, timeOfDay) {
        // Validate the timeOfDay format
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
        if (!timeRegex.test(timeOfDay)) {
            throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').")
        }

        const [hours, minutes] = timeOfDay.split(":").map(Number)

        // Calculate the delay in milliseconds
        const now = new Date();
        let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())

        // Set the target time for today
        targetTime.setHours(hours, minutes, 0, 0)

        // If the target time is in the past, set it for tomorrow
        if (targetTime <= now) {
            targetTime.setDate(targetTime.getDate() + 1)
        }

        const delay = targetTime.getTime() - now.getTime()

        // Set the timeout
        logger.log('Reloading page at', timeOfDay ,'in', Math.floor(delay / 1000 / 60), 'minutes')
        const timeoutId = setTimeout(callback, delay)

        return timeoutId
    }

    // Example Usage:
    const reload = () => {
        logger.log("Timeout reached! ")
        window.location.reload(true)
    }

    React.useLayoutEffect(() => {
        const timeouts = [
            setTimeOfDayTimeout(reload, '00:00'),
            setTimeOfDayTimeout(reload, '03:00'),
            setTimeOfDayTimeout(reload, '06:00'),
            setTimeOfDayTimeout(reload, '09:00'),
            setTimeOfDayTimeout(reload, '12:00'),
            setTimeOfDayTimeout(reload, '15:00'),
            setTimeOfDayTimeout(reload, '18:00'),
            setTimeOfDayTimeout(reload, '21:00')
        ]

        return () => {
            timeouts.forEach(timeoutId => {
                if (timeoutId) clearTimeout(timeoutId)
            })
        }
    }, [])

}

export default Reload