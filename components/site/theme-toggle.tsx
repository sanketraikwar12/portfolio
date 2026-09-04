"use client";

import {MoonStar, SunMedium} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button
        variant="secondary"
        size="sm"
        type="button"
        aria-label="Toggle color theme"
        className="h-10 w-10 rounded-full p-0"
        disabled
      >
        <SunMedium className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="secondary"
      size="sm"
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full p-0"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </Button>
  );
}
