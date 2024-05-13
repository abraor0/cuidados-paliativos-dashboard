import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const monthMap: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

export function parseStandardDate(date: string) {
  const parts = date.split(" ");

  const day = parseInt(parts[0]);
  const month = parts[2];
  const year = parseInt(parts[4]);
  const time = parts[5];
  const offset = parseInt(parts[6].substring(3));
  const [hour, minute, second] = time.split(":").map((part) => parseInt(part));

  // Criando o objeto Date
  const dateObject = new Date(
    Date.UTC(year, monthMap[month], day, hour - offset, minute, second)
  );

  return dateObject;
}
