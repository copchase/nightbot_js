/* Reminder: Nightbot cannot work with inline comments, use block comments only */
const birthdayMonth = 11; /* 1 = January. 12 = December, etc... */
const birthdayDay = 25; /* 1 - 28, 30, 31, etc... */
const timeZone = "America/Chicago"; /* IANA Time Zone name */

const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

/**
 * findTimeZoneOffsetMs returns the timezone offset in milliseconds of the specified time zone
 * @param {string} timeZone
 * @returns {number}
 */
function findTimeZoneOffsetMs(timeZone) {
    const offsetFormat = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        hourCycle: "h23", /* this prevents Intl from presenting 00:00 as 24:00 */
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    const offsetTimeStr = offsetFormat.format(0);
    const extractRegex = /(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/;
    const offsetFrags = offsetTimeStr.match(extractRegex);

    /* this is in milliseconds, months are zero indexed */
    return Date.UTC(offsetFrags[3], offsetFrags[1] - 1, offsetFrags[2], offsetFrags[4], offsetFrags[5], offsetFrags[6]);
}

/**
 * findNextBirthday finds the next possible birthday date, represented as a Date object
 * @param {number} month
 * @param {number} day
 * @param {number} offset
 * @returns {Date}
 */
function findNextBirthday(month, day, offset) {
    const birthday = new Date();
    birthday.setUTCDate(1);
    birthday.setUTCMonth(month - 1);
    birthday.setUTCDate(day);
    birthday.setUTCHours(0, 0, 0, 0);

    const dayAfterBirthday = new Date(birthday);
    dayAfterBirthday.setUTCHours(24);

    const now = new Date();
    now.setUTCMilliseconds(now.getUTCMilliseconds() + offset);

    if (dayAfterBirthday <= now) {
        /* this birthday is in the past, increment the year */
        birthday.setUTCFullYear(birthday.getUTCFullYear() + 1);
    }

    return birthday;
}

/**
 * getMsUntilBirthday returns the milliseconds until the birthday begins
 * @param {Date} birthday
 * @param {number} offset
 * @returns {number}
 */
function getMsUntilBirthday(birthday, offset) {
    const now = new Date();
    now.setUTCMilliseconds(now.getUTCMilliseconds() + offset);
    return now.valueOf() - birthday.valueOf();
}

/**
 * buildTimeDiff takes a number in milliseconds and converts it into bigger units of time
 * @param {number} diff
 * @returns {Array}
 */
function buildTimeDiff(diff) {
    if (diff === 0) {
        return "Just started FeelsBirthdayMan ";
    }

    const isBirthdayToday = diff > 0;
    /* use absolute value here so i can floor divide without worrying about ceilings for negatives */
    let t = Math.abs(diff);

    const days = Math.floor(t / dayInMs);
    t = t % dayInMs;
    const hours = Math.floor(t / hourInMs);
    t = t % hourInMs;
    const minutes = Math.floor(t / minuteInMs);
    t = t % minuteInMs;
    const seconds = Math.floor(t / secondInMs);

    return [isBirthdayToday, days, hours, minutes, seconds];
}

/**
 * formatTimeDiffFrags presents units of time as a string
 * @param {boolean} isBirthdayToday
 * @param {number} days
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns {string}
 */
function formatTimeDiffFrags(isBirthdayToday, days, hours, minutes, seconds) {
    if ((days + hours + minutes + seconds) === 0) {
        return "FeelsBirthdayMan";
    }

    const strFrags = [];

    /* if the birthday is today, then days should be 0 anyway */
    if (days > 0) {
        strFrags.push(`${days} days`)
    }
    if (hours > 0) {
        strFrags.push(`${isBirthdayToday ? 23 - hours : hours} hours`);
    }
    if (minutes > 0) {
        strFrags.push(`${isBirthdayToday ? 59 - minutes : minutes} minutes`);
    }
    if (seconds > 0) {
        strFrags.push(`${isBirthdayToday ? 59 - seconds : seconds} seconds`);
    }

    /* add "and" fragment to the final one to be fancy */
    if (strFrags.length > 1) {
        let lastFrag = strFrags.pop();
        lastFrag = `and ${lastFrag}`;
        strFrags.push(lastFrag);
    }

    const prefix = isBirthdayToday ? "Ends in " : "Begins in ";
    const middle = strFrags.length > 2 ? strFrags.join(", ") : strFrags.join(" ");
    const suffix = isBirthdayToday ? " FeelsBirthdayMan " : "";
    return `${prefix}${middle}${suffix}`;
}

const timeZoneOffsetMs = findTimeZoneOffsetMs(timeZone);
const nextBirthday = findNextBirthday(birthdayMonth, birthdayDay, timeZoneOffsetMs);
const nextMs = getMsUntilBirthday(nextBirthday, timeZoneOffsetMs);
const [isBirthdayToday, days, hours, minutes, seconds] = buildTimeDiff(nextMs);
formatTimeDiffFrags(isBirthdayToday, days, hours, minutes, seconds);
