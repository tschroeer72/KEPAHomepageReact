import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = {
  title: "Aktuelles",
  description: "Eine kurze Beschreibung der App.",
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
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Termine
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          bbbb
        </Typography>
      </Container>
    </Box>
  );
}
