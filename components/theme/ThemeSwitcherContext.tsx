"use client";

import React from "react";

/** Context in welchem die aktuelle Theme Einstellung gehalten wird. */
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export default function ThemeSwitchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState("light");
  // useMemo damit das Setzen der Funktion nicht unnötige Renderzyklen auslöst
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider
      value={{ toggleColorMode: colorMode.toggleColorMode, mode: mode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
