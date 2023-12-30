"use client";

// React Imports
import { useState, useEffect } from "react";

// Next Theme
import { useTheme } from "next-themes";

// Radix UI Imports
import { MoonIcon } from "@radix-ui/react-icons";

// Custom Component Imports
import IconButton from "@/components/button/IconButton";

const ThemeIcon = () => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  if (!mounted) {
    return <IconButton icon={<MoonIcon />} className="text-main-title-light" />;
  }

  const handleThemeToggle = () => {
    if (darkMode) {
      setTheme("light");
      setDarkMode(false);
    } else {
      setTheme("dark");
      setDarkMode(true);
    }
  };

  return (
    <IconButton
      icon={<MoonIcon aria-label="Toggle Darkmode" />}
      className={`${darkMode ? "text-yellow-400" : "text-main-title-light"}`}
      onClick={handleThemeToggle}
    />
  );
};

export default ThemeIcon;
