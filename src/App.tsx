import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getSkipState } from "./store/selectors/Skip";
import { fetchSkips, setSelectedSkip } from "./store/reducers/Skip";

const App = () => {
  const dispatch = useDispatch();
  const { selectedSkip, skips, isLoading } = useSelector(getSkipState);

  const handleSelect = (skip: TSkip) => {
    if (selectedSkip?.id === skip.id) {
      dispatch(setSelectedSkip(null));
    } else {
      dispatch(setSelectedSkip(skip));
    }
  };

  useEffect(() => {
    dispatch(fetchSkips());
  }, []);

  return (
    <StyledContainer>
      <Typography variant="h5" gutterBottom>
        Choose Your Skip Size
      </Typography>
      <Typography variant="body2" mb={3}>
        Select the skip size that best suits your needs.
      </Typography>
      {isLoading ? (
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
              selectedSkip={selectedSkip}
              onSelect={handleSelect}
            />
          ))}
        </Grid>
      )}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined">Back</Button>
        <Button
          variant="contained"
          disabled={!selectedSkip}
          onClick={() => {
            console.log("Selected skip:", selectedSkip);
          }}
        >
          Continue
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default App;
