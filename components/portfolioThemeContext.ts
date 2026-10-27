"use client";

import { createContext, useContext } from "react";

export type PortfolioTheme = "light" | "space" | "blueprint";
export const PortfolioThemeContext = createContext<PortfolioTheme>("blueprint");
export const usePortfolioTheme = () => useContext(PortfolioThemeContext);
