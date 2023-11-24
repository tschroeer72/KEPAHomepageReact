'use client'

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import useNotification from '@/components/notifications/useNotifications';
import useThemeSwitcher from '@/components/theme/useThemeSwitcher';

export default function Demo() {

    const notificationService = useNotification();
    const themeService = useThemeSwitcher();

    const [showError, setShowError] = useState(false);

    return (<>
        <Typography variant="h4" align="center" color="text.secondary" paragraph>
            Demo
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Diese Demo Seite findet ihr in /components/Demo.tsx 
        </Typography>
        <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
        >
            <Button variant="outlined" onClick={() => themeService.toggleTheme()}>Theme wechseln</Button>
            <Button variant="outlined" onClick={() => notificationService.showInfoMessage("Eine Info kann hier ganz einfach angezeigt werden, aus allen react-client-Komponenten.")}>Eine Info anzeigen</Button>
            <Button variant="outlined" onClick={() => notificationService.showErrorMessage("Eine Fehlermeldung kann genauso angezeigt werden!")}>Einen Fehler anzeigen</Button>

            <Button variant="outlined" onClick={() => setShowError(true)}>Einen Fehler erzeugen</Button>
            
            <ErrorComponent showError={showError} />
        </Stack>
    </>
    );
};

function ErrorComponent(props: {showError: boolean}) {
    if (props.showError) {
        throw new Error("oh no 2");
    }
    return (<></>);
};