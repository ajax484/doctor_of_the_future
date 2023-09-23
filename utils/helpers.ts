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

export function combineDateAndTimeToISO(date: Date, time: string): string {
  // Convert the Date object to an ISO string without the timezone information
  const datePart = date.toISOString().split("T")[0];

  // Combine the date part and the time string
  const combinedString = `${datePart}T${time}`;

  return combinedString;
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

export const typeMapping: Record<string, string> = {
  BKN: "bookings",
  PLN: "plans",
  PRG: "programs",
  SHP: "shop",
  SUB: "subscriptions",
};

export function generateReferenceNumber(productType: string): string {
  if (!(productType in typeMapping)) {
    throw new Error("Invalid product type");
  }

  const randomNumbers = () =>
    Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");

  return `${productType}-${randomNumbers()}-${randomNumbers()}-${randomNumbers()}`;
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
