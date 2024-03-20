import { Time } from "../types/time"

export const setTimeOfDate = (
    originalDate: Date | string,
    timeOrTimeString: Time | string
): Date => {
    const originalDateAsDate =
        typeof originalDate === "string" ? new Date(originalDate) : originalDate

    const year = originalDateAsDate.getFullYear()
    const month = originalDateAsDate.getMonth()
    const day = originalDateAsDate.getDate()

    const time =
        typeof timeOrTimeString === "string"
            ? stringAsTime(timeOrTimeString)
            : timeOrTimeString

    let { hr, min, ampm } = time

    if (ampm === "PM" && hr !== 12) {
        hr = hr + 12
    } else if (ampm === "AM" && hr === 12) {
        hr = 0
    }

    const newDate: Date = new Date(year, month, day, hr, min)

    return newDate
}

export const stringAsTime = (str: string) => {
    const processedStr = str.replaceAll(" ", "")
    const regex = /^(\d{2}):(\d{2})(AM|PM)$/

    const matches = processedStr.match(regex)

    if (matches) {
        const hr = parseInt(matches[1], 10)
        const min = parseInt(matches[2], 10)
        const ampm = matches[3]

        if (hr >= 0 && hr <= 12 && min >= 0 && min <= 59) {
            return { hr, min, ampm } as Time
        }
    }

    throw new Error("Cannot parse string as Time: invalid format")
}
