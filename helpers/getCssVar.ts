"use client";

export function getCssVar(varName) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    varName
  );
  const numberValue = Number(value);

  return isNaN(numberValue)
    ? Number(value.trim().replace("px", ""))
    : numberValue;
}
