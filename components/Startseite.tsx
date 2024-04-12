'use client'

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import useNotification from '@/components/notifications/useNotifications';
import useThemeSwitcher from '@/components/theme/useThemeSwitcher';

export default function Startseite() {

    const notificationService = useNotification();
    const themeService = useThemeSwitcher();

    const [showError, setShowError] = useState(false);

    return (<>
            <Typography variant="h3" align="center" color="text.secondary" paragraph>
                Herzlich Willkommen bei KEPA
            </Typography>

        </>
    );
};

function ErrorComponent(props: {showError: boolean}) {
    if (props.showError) {
        throw new Error("oh no 2");
    }
    return (<></>);
};