import CssBaseline from '@mui/material/CssBaseline';

import NotificationProvider from '@/components/notifications/NotificationProvider';
import ThemeRegistry from '@/components/theme/ThemeRegistry';
import ThemeSwitchProvider from '@/components/theme/ThemeSwitcherContext';

/**
 * Gerüst der Anwendung.
 * Hier sollen alle Anwendungsübergreifenden Provider definiert werden.
 */
function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeSwitchProvider>
      <ThemeRegistry>
        <CssBaseline />
        <NotificationProvider>

          {children}

        </NotificationProvider>
      </ThemeRegistry>
    </ThemeSwitchProvider>
  );
};

export default App;
