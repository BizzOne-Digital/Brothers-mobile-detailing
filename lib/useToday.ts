"use client";
import { useEffect, useState } from "react";
import { today } from "./validation";

/** Today's date (YYYY-MM-DD), read on the client so prerendering stays static */
export function useToday() {
  const [value, setValue] = useState<string>();
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setValue(today()), []);
  return value;
}
