"use client";

import Stack from "@mui/material/Stack";
import { Alert } from "@mui/material";

import useNotification from "@/components/notifications/useNotifications";

/**
 * Darstellung der Meldungen.
 */
function Notification() {
  const notificationService = useNotification();

  const messages = notificationService.getMessages();

  // Eine MUI Snackbar unterstützt leider nur ein Alert, deswegen kann das hier nicht verwendet werden.
  // Stattdessen wird ein Stack verwendet und die Position der Benachrichtigungen wird
  // als CSS gesetzt.
  // mit top: 80 wird die Höhe der AppBar angegeben, damit die Meldungen nicht hinter der AppBar auftauchen.
  return (
    <>
      <Stack sx={{ position: "absolute", top: 80 }} spacing={2}>
        {messages.map((eachMessage) => (
          <Alert severity={eachMessage.status} key={eachMessage.id}>
            {eachMessage.message}
          </Alert>
        ))}
      </Stack>
    </>
  );
}

export default Notification;
