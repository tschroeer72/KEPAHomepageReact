import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import Demo from '@/components/Demo';
import Startseite from "@/components/Startseite";
import pokal from "../images/Vereinspokal.png";
import Image from "next/image";
import Stack from "@mui/material/Stack";

export const metadata = {
  title: "App",
  description: "App",
};

/**
 * Startseite.
 */
export default function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          {/*<Startseite />*/}
          <Typography
            variant="h3"
            align="center"
            color="text.secondary"
            paragraph
          >
            Herzlich Willkommen bei KEPA
          </Typography>
          <div style={{ height: "60vh" }}>
            <Image
              src={pokal}
              alt="Pokal"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
