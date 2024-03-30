import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    // Less than 1 hour
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    // Less than 1 day
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (diffInSeconds < 2592000) {
    // Less than 30 days
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (diffInSeconds < 31536000) {
    // Less than 1 year
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    // More than 1 year
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }
};

export const formatBigNumber = (number: number): string => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}m`;
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}k`;
  } else {
    return number.toString();
  }
};
