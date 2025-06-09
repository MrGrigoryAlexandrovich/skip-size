import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import Skip from "./components/Skip";
import type { TSkip } from "./models/Skip";
import { StyledContainer } from "./components/Skip/style";

const App = () => {
  const [skips, setSkips] = useState<TSkip[]>([]);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        const data = await res.json();
        setSkips(data);
      } catch (err) {
        console.error("Failed to fetch skips", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkips();
  }, []);

  const handleSelect = (id: number) => {
    if (id !== selectedSkipId) {
      setSelectedSkipId(id);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h5" gutterBottom>
        Choose Your Skip Size
      </Typography>
      <Typography variant="body2" mb={3}>
        Select the skip size that best suits your needs.
      </Typography>
      {loading ? (
        <Stack
          width="100%"
          alignItems="center"
          justifyContent="center"
          height={200}
        >
          <CircularProgress size={36} />
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {skips.map((skip) => (
            <Skip
              skip={skip}
              selectedSkipId={selectedSkipId}
              onSelect={handleSelect}
            />
          ))}
        </Grid>
      )}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined">Back</Button>
        <Button
          variant="contained"
          disabled={!selectedSkipId}
          onClick={() => {
            console.log("Selected skip ID:", selectedSkipId);
          }}
        >
          Continue
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default App;
