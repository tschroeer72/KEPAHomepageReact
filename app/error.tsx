"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Ein Fehler wurde geworfen: " + error);
  }, [error]);

  return (
    <div>
      <h2>Etwas ist schiefgelaufen.</h2>
      <button onClick={() => reset()}>Nocheinmal versuchen</button>
    </div>
  );
}
