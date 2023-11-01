"use client";

// React Imports
import { useState, useEffect } from "react";

// NextJS Imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Next Theme
import { useTheme } from "next-themes";

// Radix UI Imports
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  MoonIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

// Custom Component Imports
import IconButton from "@/components/IconButton";

// React Spring Imports
import { animated, useSpring } from "@react-spring/web";
import { pages } from "../pages";

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
    return <IconButton icon={<MoonIcon />} className="text-white" />;
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
      icon={<MoonIcon />}
      className={`${darkMode ? "text-yellow-400" : "text-white"}`}
      onClick={handleThemeToggle}
    />
  );
};

const SidebarContent = () => {
  const pathname = usePathname();
  const urlRoot = pathname.split("/");

  return (
    <Accordion.Root
      type="multiple"
      className="w-64 text-black dark:bg-gray-800 dark:text-white"
      defaultValue={[urlRoot[1]]}
    >
      {pages.map((page) => {
        return (
          <Accordion.AccordionItem
            key={page.root}
            value={page.root}
            className="border-b-2 dark:border-b-gray-800"
          >
            <Accordion.AccordionHeader>
              <Accordion.AccordionTrigger className="AccordionTrigger flex h-full w-full items-center justify-between p-3 text-base">
                {page.level}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.AccordionTrigger>
            </Accordion.AccordionHeader>
            <Accordion.AccordionContent className="AccordionContent">
              {page.contents.map((link) => {
                const pageLink = `/${page.root}/${link.link}`;
                return (
                  <Link
                    key={link.name}
                    href={pageLink}
                    className={`block p-3 pl-8 text-sm last-of-type:pb-6 hover:underline ${
                      pathname === pageLink
                        ? "font-medium text-[#CC3E3E] dark:text-white"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        );
      })}
    </Accordion.Root>
  );
};

const Header = () => {
  // State to manage the visibility of the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Animation configuration for the sidebar
  const [sidebarSprings, sidebarApi] = useSpring(() => ({
    from: { x: -300 }, // Initial position of the sidebar
  }));

  // Animated Sidenar Toggle button component
  const AnimatedSidebarToggle = animated(IconButton);

  // Animation configuration for the hamburger button
  const [hamburgerSprings, hamburgerApi] = useSpring(() => ({
    from: { transform: "rotate(0deg)", opacity: 1 }, // Initial rotation and opacity
  }));

  // Animation configuration for the cross button
  const [crossSprings, crossApi] = useSpring(() => ({
    from: { transform: "rotate(0deg)", opacity: 0 }, // Initial rotation and opacity
  }));

  // Animation configuration for the sidebar overlay
  const [overlaySprings, overlayApi] = useSpring(() => ({
    from: { opacity: 0 }, // Initial opacity
  }));

  // Animation config for sidebar
  const sidebarAnimConfig = { duration: 200, tension: 120, friction: 14 };

  // Function to toggle the sidebar visibility
  const handleSidebarOpen = () => {
    // Toggle the sidebar state
    if (sidebarOpen) {
      // Wait for 200 milisecond if sidebarOpen is true. Used for smooth transition on drawer retraction
      setTimeout(() => {
        setSidebarOpen(!sidebarOpen);
      }, 200);
    } else {
      // Don't wait otherwise. Default behaviour
      setSidebarOpen(!sidebarOpen);
    }
    // Animate the sidebar position
    sidebarApi.start({
      from: { x: sidebarOpen ? 0 : -300 },
      to: { x: sidebarOpen ? -300 : 0 },
      config: sidebarAnimConfig,
    });
    // Animate the hamburger button rotation and opacity
    hamburgerApi.start({
      from: {
        transform: sidebarOpen ? "rotate(90deg)" : "rotate(0deg)",
        opacity: sidebarOpen ? 0 : 1,
      },
      to: {
        transform: sidebarOpen ? "rotate(0deg)" : "rotate(90deg)",
        opacity: sidebarOpen ? 1 : 0,
      },
      config: sidebarAnimConfig,
    });
    // Animate the cross button rotation and opacity
    crossApi.start({
      from: {
        transform: sidebarOpen ? "rotate(90deg)" : "rotate(0deg)",
        opacity: sidebarOpen ? 1 : 0,
      },
      to: {
        transform: sidebarOpen ? "rotate(0deg)" : "rotate(90deg)",
        opacity: sidebarOpen ? 0 : 1,
      },
      config: sidebarAnimConfig,
    });
    // Animate the overlay opacity
    overlayApi.start({
      from: {
        opacity: sidebarOpen ? 0.7 : 0,
      },
      to: {
        opacity: sidebarOpen ? 0 : 0.7,
      },
      config: sidebarAnimConfig,
    });
  };

  return (
    <>
      {/* Header section */}
      <header className="fixed left-0 right-0 top-0 z-[100] flex h-14 flex-row items-center justify-between bg-[#CC3E3E] px-2 shadow-md dark:bg-gray-700 md:h-16">
        <div id="header-left-side" className="flex items-center gap-2">
          <div className="relative block md:hidden">
            <AnimatedSidebarToggle
              style={hamburgerSprings}
              icon={<HamburgerMenuIcon />}
              onClick={handleSidebarOpen}
              className="relative text-white"
            />
            <AnimatedSidebarToggle
              style={crossSprings}
              icon={<Cross1Icon />}
              onClick={handleSidebarOpen}
              className="absolute left-0 top-0 text-white"
            />
          </div>
          <Link href="/" className="flex select-none items-center gap-1">
            <Image
              src="/logo.jpg"
              alt="TanukiHub"
              width={500}
              height={500}
              className="h-8 w-8"
            />
            <div className="text-xl font-medium text-white">TanukiHub</div>
          </Link>
        </div>
        <div className="flex gap-1">
          <Link href="https://github.com/LinCie/tanukihub" target="_blank">
            <IconButton icon={<GitHubLogoIcon />} className="text-white" />
          </Link>
          <ThemeIcon />
        </div>
      </header>

      {/* Sidebar section */}
      <animated.nav
        style={sidebarSprings}
        className={`fixed bottom-0 left-0 top-0 z-[99] h-screen border-r-2 bg-white pt-14 dark:border-r-gray-800 dark:bg-gray-900 md:pt-16 ${
          sidebarOpen ? "md:left-0" : "md:left-[300px]"
        }`}
        aria-live="polite"
      >
        {/* Sidebar Content */}
        <div id="sidebar" className="h-full overflow-y-auto overflow-x-clip">
          <SidebarContent />
        </div>
      </animated.nav>
      {/* Sidebar Overlay */}
      <animated.div
        className={`
          fixed z-[98] h-screen w-screen overflow-auto bg-black md:hidden ${
            sidebarOpen ? "block" : "hidden"
          }`}
        style={overlaySprings}
        onClick={handleSidebarOpen}
      />
    </>
  );
};

export default Header;
