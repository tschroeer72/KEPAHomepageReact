import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";

export const metadata = {
  title: "Aktuelles",
  description: "Aktuelles",
};

export default function Page() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Aktuelles
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Bist Du zwischen 50 und 70 Jahre jung, männlich und hättest Lust zum
          regelmäßigen Kegeln? Dann melde Dich bei uns. Wir suchen Verstärkung.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Wir treffen uns alle 14 Tage mittwochs in Buckow. Für Einzelheiten
          schreibe uns eine Nachricht über unser{" "}
          <Link href="\kontakt">Kontaktformular</Link>
        </Typography>
      </Container>
    </Box>
  );
}
