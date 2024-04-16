import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Cal from "@/app/termine/Cal";

export const metadata = {
  title: "Termine",
  description: "Termine",
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
          Termine
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Im Kalender findest Du alle Termine des laufenden Jahres
        </Typography>

        <Cal />
      </Container>
    </Box>
  );
}
