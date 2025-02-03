"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/at";

export function PlaceholdersAndVanishInput({
  placeholders,
  onSubmit,
}: {
  placeholders: string[];
  onSubmit: (message: string) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000);
    };

    if (!value && !isFocused) {
      setShowPlaceholder(true);
      startAnimation();
    } else {
      setShowPlaceholder(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [placeholders, value, isFocused]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      setShowPlaceholder(true);
    }
  };

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto h-14 rounded-full transition duration-200 border",
        isFocused ? "border-indigo-500" : "border-gray-700"
      )}
      onSubmit={handleSubmit}
    >
      <div className="relative w-full h-full">
        <input
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          type="text"
          className="w-full absolute inset-0 text-2xl sm:text-xl border-none text-white bg-transparent rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-8 pr-12"
        />

        <AnimatePresence mode="wait">
          {showPlaceholder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center pointer-events-none"
            >
              <motion.p
                key={currentPlaceholder}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-base sm:text-lg font-normal pl-4 sm:pl-8 truncate"
              >
                {placeholders[currentPlaceholder]}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        disabled={!value.trim()}
        type="submit"
        className={cn(
          "absolute right-3 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full transition duration-200 flex items-center justify-center",
          value.trim()
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600"
            : "bg-gray-700"
        )}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>
    </form>
  );
}