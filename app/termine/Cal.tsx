"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import PushPinIcon from "@mui/icons-material/SportsBaseballTwoTone";

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      /*const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth),
      );*/
      let daysToHighlight = [];
      //daysToHighlight.push(1);
      // daysToHighlight.push(24);

      const currentYear = dayjs().year();
      //console.log("CurrentYear = " + currentYear);
      const firstDay = dayjs(currentYear + "-01-01");
      //console.log("firstDay = " + firstDay.format("YYYY-MM-DD"));

      const firstEvent = firstDay.add(3 - firstDay.day(), "day");
      //console.log("firstEvent = " + firstEvent.format("YYYY-MM-DD"));
      if (firstEvent.month() == date.month()) {
        daysToHighlight.push(firstEvent.date());
      }
      //daysToHighlight.push(firstEvent.date());

      let nextEvent = firstEvent.add(14, "day");
      //console.log("nextEvent = " + nextEvent.format("YYYY-MM-DD"));
      while (nextEvent.year() === currentYear) {
        //console.log("nextEvent = " + nextEvent.format("YYYY-MM-DD"));
        //daysToHighlight.push(nextEvent.date());
        if (nextEvent.month() == date.month()) {
          daysToHighlight.push(nextEvent.date());
        }
        nextEvent = nextEvent.add(14, "day");
      }

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

//const initialCurrentDate = dayjs("2024-04-01");
const initialCurrentDate = dayjs();

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] },
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      //badgeContent={isSelected ? <PushPinIcon /> : undefined}
      badgeContent={isSelected ? "🎳" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function Cal() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  //const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [highlightedDays, setHighlightedDays] = React.useState([1]);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialCurrentDate);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: "KW",
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <DateCalendar
        defaultValue={initialCurrentDate}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}
