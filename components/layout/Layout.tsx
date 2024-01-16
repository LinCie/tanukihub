"use client";

// React Imports
import { useState } from "react";

// NextJS Imports
import Image from "next/image";
import Link from "next/link";

// Radix UI Imports
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

// Custom Component Imports
import IconButton from "@/components/button/IconButton";
import ThemeIcon from "@/components/layout/ThemeIcon";
import SidebarContent from "@/components/layout/SidebarContent";

// React Spring Imports
import { animated, useSpring } from "@react-spring/web";

const Layout = () => {
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
      <header className="fixed inset-x-0 top-0 z-[100] flex h-14 flex-row items-center justify-between bg-main-identity px-2 shadow-md dark:bg-gray-700 md:h-16">
        <div id="header-left-side" className="flex items-center gap-2">
          <div className="relative block md:hidden">
            <AnimatedSidebarToggle
              style={hamburgerSprings}
              icon={<HamburgerMenuIcon />}
              onClick={handleSidebarOpen}
              className="relative text-main-title-light"
              aria-label="Toggle Sidebar Open"
            />
            <AnimatedSidebarToggle
              style={crossSprings}
              icon={<Cross1Icon />}
              onClick={handleSidebarOpen}
              className="absolute left-0 top-0 text-main-title-light"
              aria-label="Toggle Sidebar Close"
            />
          </div>
          <Link
            aria-label="Return to the front page"
            href="/"
            className="flex select-none items-center gap-1"
          >
            <Image
              src="/logo.jpg"
              alt="TanukiHub Logo"
              width={500}
              height={500}
              className="size-8"
            />
            <div className="text-xl font-medium text-main-title-light">
              TanukiHub
            </div>
          </Link>
        </div>
        <div className="flex gap-1">
          <Link
            aria-label="Visit our github repository"
            href="https://github.com/LinCie/tanukihub"
            target="_blank"
          >
            <IconButton
              icon={<GitHubLogoIcon aria-label="GitHub Logo" />}
              className="text-main-title-light"
            />
          </Link>
          <ThemeIcon />
        </div>
      </header>

      {/* Sidebar section */}
      <animated.nav
        style={sidebarSprings}
        // eslint-disable-next-line tailwindcss/enforces-shorthand
        className={`fixed inset-y-0 left-0 z-[99] h-screen border-r-2 bg-white pt-14 dark:border-r-gray-800 dark:bg-gray-900 md:pt-16 ${
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
        // eslint-disable-next-line tailwindcss/enforces-shorthand
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

export default Layout;
