import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Kontaktform from "@/app/kontakt/Kontaktform";

export const metadata = {
  title: "Kontaktformular",
  description: "Kontaktformular",
};

export default function Page() {
  return (
    <>
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
            Kontakt
          </Typography>
          <Kontaktform />
        </Container>
      </Box>
    </>
  );
}
