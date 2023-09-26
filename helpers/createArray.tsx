"use client";
export const createArray = (length) => {
  if (length < 0 || !length) return [];
  return [...new Array(length)].map((_, i) => i);
};
