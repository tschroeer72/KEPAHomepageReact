import { useContext } from 'react';
import { ColorModeContext } from '@/components/theme/ThemeSwitcherContext';

/**
 * Bietet die Möglichkeit das aktuelle Theme zu wechseln.
 */
export default function useThemeSwitcher() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);

    return {
        /** Liefert eine Funktion die bei Aufruf das aktuelle Theme umschaltet. */
        toggleTheme: () => {
            toggleColorMode();
        },
        getCurrentThemeName: () => {
            return mode;
        },
    };
};
