const weeks2024 = {
    // January
    1: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    2: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    3: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    4: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    5: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // February
    6: {
        booking_count: 2,
        comprehensive: false,
        observers: 0
    },
    7: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    8: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    9: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    //  March
    10: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    11: {
        booking_count: 2,
        comprehensive: false,
        observers: 0
    },
    12: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    13: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // April
    14: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    15: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    16: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    17: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    18: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // May
    19: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    20: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    21: {
        booking_count: 2,
        comprehensive: false,
        observers: 0
    },
    22: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // June
    23: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    24: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    25: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    26: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // July
    27: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    28: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    29: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    30: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    31: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // August
    32: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    33: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    34: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    35: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // September
    36: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    37: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    38: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    39: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // October
    40: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    41: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    42: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    43: {
        booking_count: 2,
        comprehensive: true,
        observers: 0
    },
    44: {
        booking_count: 0,
        comprehensive: true,
        observers: 0
    },
    // November
    45: {
        booking_count: 0,
        comprehensive: true,
        observers: 0
    },
    46: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    47: {
        booking_count: 0,
        comprehensive: true,
        observers: 0
    },
    48: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    // December
    49: {
        booking_count: 0,
        comprehensive: true,
        observers: 0
    },
    50: {
        booking_count: 2,
        comprehensive: false,
        observers: 2
    },
    51: {
        booking_count: 0,
        comprehensive: true,
        observers: 0
    },
    52: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
    53: {
        booking_count: 2,
        comprehensive: true,
        observers: 2
    },
};

window.calendarData = [];

/**
 * Reference for Stack Overflow First day of given week calculator
 * https://stackoverflow.com/a/16354810
 */
function firstDayOfWeek(week, year) { 
    
    if (typeof year === 'undefined') {
        year = (new Date()).getFullYear();
    }

    var date       = firstWeekOfYear(year),
        weekTime   = weeksToMilliseconds(week),
        targetTime = date.getTime() + weekTime;
    
    return date.setTime(targetTime); 
    
}

function weeksToMilliseconds(weeks) {
    return 1000 * 60 * 60 * 24 * 7 * (weeks - 1);
}

function firstWeekOfYear(year) {
    var date = new Date();
    date = firstDayOfYear(date,year);
    date = firstWeekday(date);
    return date;
}

function firstDayOfYear(date, year) {
    date.setYear(year);
    date.setDate(1);
    date.setMonth(0);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

/**
 * Sets the given date as the first day of week of the first week of year.
 */
function firstWeekday(firstOfJanuaryDate) {
	var FIRST_DAY_OF_WEEK = 1; // Monday, according to iso8601
	var WEEK_LENGTH = 7; // 7 days per week
    var day = firstOfJanuaryDate.getDay();
    day = (day === 0) ? 7 : day; // make the days monday-sunday equals to 1-7 instead of 0-6
	var dayOffset=-day+FIRST_DAY_OF_WEEK; // dayOffset will correct the date in order to get a Monday
	if (WEEK_LENGTH-day+1<4) {
		// the current week has not the minimum 4 days required by iso 8601 => add one week
		dayOffset += WEEK_LENGTH;
	}
    return new Date(firstOfJanuaryDate.getTime()+dayOffset*24*60*60*1000);
}

const constructEventData = (date, booking_count, comprehensive, observers) => {
    // Construct Observer Color For Visibility based on Comprehensive VS Surgery
    let observerColor = '';
    if (observers == 0) {
        if (comprehensive && booking_count == 0) {
            observerColor = 'rgb(0, 161, 255)';
        } else if (comprehensive && booking_count == 2) {
            observerColor = 'rgb(0, 161, 255)';
        } else {
            observerColor = 'rgb(0, 161, 255)';
        }
    }

    let color = '';
    if (booking_count == 0) {
        color = '#198754';
    } else if (booking_count == 1) {
        color = '#ffc334';
    } else if (booking_count == 2) {
        color = '#dc3545';
    }
    const eventData = {
        id: date,
        startDate: date,
        endDate: date,
        name: 'Event',
        color,
        observerColor,
        comprehensive: comprehensive,
    };
    return eventData;
}

const processYear = (weeks, currentYear) => {
    for (let weekNumber in weeks) {
        const week = weeks[weekNumber];
        const firstDayForCurrentWeek = new Date(firstDayOfWeek(weekNumber, currentYear));
        const dayToModify = new Date(firstDayForCurrentWeek);
        window.calendarData.push(constructEventData(firstDayForCurrentWeek, weeks[weekNumber].booking_count, weeks[weekNumber].comprehensive, weeks[weekNumber].observers));
        // Iterate for an additional 4 days to generate date data object for the entire week
        for (let i = 1; i < 5; i++) {
            let nextDayForCurrentWeek = new Date(dayToModify.setDate(dayToModify.getDate() + 1));
            window.calendarData.push(constructEventData(nextDayForCurrentWeek, weeks[weekNumber].booking_count, weeks[weekNumber].comprehensive, weeks[weekNumber].observers));
        }
    }
};

(() => {
    processYear(weeks2024, 2024);
    new Calendar('.calendar', {
        startYear: 2024,
        dataSource: window.calendarData
    });
})();
