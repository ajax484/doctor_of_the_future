export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function combineDateAndTime(date: Date | undefined, time: string): Date {
  if (!date) return new Date();
  // Convert the date and time strings to Date objects
  const dateObj = date;
  const timeObj = new Date(`1970-01-01T${time}`);

  // Extract the year, month, and day from the date
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();

  // Set the time part (hours, minutes, seconds, milliseconds) from the time object
  dateObj.setHours(timeObj.getHours());
  dateObj.setMinutes(timeObj.getMinutes());
  dateObj.setSeconds(timeObj.getSeconds());
  dateObj.setMilliseconds(timeObj.getMilliseconds());

  // Set the year, month, and day from the original date
  dateObj.setFullYear(year, month, day);

  return dateObj;
}

export function formatDateToHumanReadable(date: Date | undefined): string {
  if (!date) return "";
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

export function convertDateFormat(inputDate: string | number | Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const monthIndex = date.getMonth();
  const day = date.getDate();

  const formattedDate = `${months[monthIndex]} ${day}`;
  return formattedDate;
}
