import { useContext } from "react";

import {
  MessagesContext,
  MessagesStateType,
  MessageType,
} from "@/components/notifications/NotificationProvider";

/** Angabe wie lange eine Meldung angezeigt werden soll (in ms) bis sie automatisch ausgeblendet wird. */
const MESSAGE_SHOWTIME = 4000;

/**
 * Bietet Zugang zu den Benachrichtigungen.
 * Über diesen Hook können Benachrichtigungen eingestellt werden.
 */
export default function useNotification() {
  const { state, dispatch } = useContext(MessagesContext);

  /** Eine Message hinzufügen. */
  const addMessage = (message: MessageType) => {
    // Functional Update des setState verwenden um immer den aktuellen State zu haben. Das dispatch ist hier einfach
    // nur das setState, siehe NotificationProvider.tsx
    // Die message wird in das Array der messages ergänzt (mit hilfe der spread Syntax)
    // und die nextId muss hochgezählt werden.
    dispatch((prevState: MessagesStateType) => {
      return {
        ...prevState,
        messages: [...prevState.messages, message],
        nextId: prevState.nextId + 1,
      };
    });
  };

  /** Timeout erstellen um die Meldung/en mit der ID zu entfernen. */
  const setDeleteMessageTimeout = (id: number) => {
    /** Einen Timer setzen um die Meldung nach X ms wieder zu entfernen. */
    setTimeout(() => {
      // Functional Update des setState verwenden um immer den aktuellen State zu haben. Das dispatch ist hier einfach
      // nur das setState, siehe NotificationProvider.tsx
      // Aus den messages alle Einträge mit der übergebenen ID rausfiltern
      dispatch((prevState: MessagesStateType) => {
        return {
          ...prevState,
          messages: prevState.messages.filter((m) => m.id != id),
        };
      });
    }, MESSAGE_SHOWTIME);
  };

  return {
    /** Zeige eine Info-Meldung an. */
    showInfoMessage: (info: string): void => {
      const message: MessageType = {
        message: info,
        status: "info",
        id: state.nextId,
      };

      addMessage(message);
      setDeleteMessageTimeout(message.id);
    },

    /** Zeige eine Fehler-Meldung an. */
    showErrorMessage: (info: string): void => {
      const message: MessageType = {
        message: info,
        status: "error",
        id: state.nextId,
      };

      addMessage(message);
      setDeleteMessageTimeout(message.id);
    },

    /** Zeige eine Meldung an. */
    showMessage: (
      info: string,
      type: "info" | "error" | "warning" | "success",
    ): void => {
      const message: MessageType = {
        message: info,
        status: type,
        id: state.nextId,
      };

      addMessage(message);
      setDeleteMessageTimeout(message.id);
    },

    getMessages: (): MessageType[] => {
      return state.messages;
    },

    /** Beispiel für Fehlerbehandlung bei einer Exception. */
    handleNetworkException: (error: Error): void => {
      const errorMessage = "Error occured. Details: " + error.message;
      const message: MessageType = {
        message: errorMessage,
        status: "error",
        id: state.nextId,
      };
      addMessage(message);
      setDeleteMessageTimeout(message.id);
    },
  };
}
