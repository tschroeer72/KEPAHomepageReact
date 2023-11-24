'use client'

import React, { useState } from 'react';

/**
 * Der Type einer Meldung.
 */
export type MessageType = {
    message: string,
    status: "info" | "error" | "warning" | "success", // Unterstützte severity aus MUI Alert
    id: number, // identifiziert eine Meldung
};

/**
 * Der Type für den State.
 */
export type MessagesStateType = {
    messages: MessageType[],
    nextId: number,
};

/**
 * Der initiale Zustand des States.
 */
const initialState: MessagesStateType = {
    messages: [],
    nextId: 1,
};

/**
 * Der Type für den Context.
 */
type MessagesContextType = {
    state: MessagesStateType,
    dispatch: React.Dispatch<any>
};

/**
 * Context anlegen.
 */
export const MessagesContext = React.createContext<MessagesContextType>({
    state: initialState,
    dispatch: () => null
});

/**
 * Der Provider für die Notifications. 
 * Stellt den Context für alle Kind-Elemente bereit.
 */
export default function NotificationProvider({ children }: { children: React.ReactNode }) {

    const [state, setState] = useState(initialState);

    return (
        <MessagesContext.Provider value={{ state, dispatch: setState }}>
            {children}
        </MessagesContext.Provider>
    );
};
