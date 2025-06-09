import { Box, Grid, Typography, Button } from "@mui/material";
import { getTotalPrice } from "../../utils";
import type { TSkipComponent } from "../../models/Skip";
import { StyledSizeChip, StyledSkipCard, StyledSkipImage } from "./style";

const Skip = ({ skip, selectedSkipId, onSelect }: TSkipComponent) => (
  <Grid
    key={skip.id}
    size={{
      xs: 12,
      sm: 6,
      md: 4,
    }}
  >
    <StyledSkipCard
      selected={skip.id === selectedSkipId}
      onClick={() => onSelect(skip.id)}
    >
      <Box position="relative">
        <StyledSkipImage
          src="https://abbeyskiphireltd.co.uk/wp-content/uploads/2021/08/Skip_Hire_Vector.png"
          alt="skip-image"
        />
        <StyledSizeChip color="primary" label={`${skip.size} Yards`} />
      </Box>
      <Typography variant="h6" mt={2}>
        {skip.size} Yard Skip
      </Typography>
      <Typography variant="body2" color="primary">
        {skip.hire_period_days} day hire period
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#00C897", fontWeight: 700, mt: 1 }}
      >
        {getTotalPrice(skip.price_before_vat, skip.vat)}
      </Typography>
      <Box mt={1} display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="body2">
          {skip.allowed_on_road ? "Can be placed on road" : "Off-road only"}
        </Typography>
        <Typography variant="body2">
          {skip.allows_heavy_waste ? "Heavy waste allowed" : "No heavy waste"}
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, opacity: selectedSkipId === skip.id ? 1 : 0.75 }}
      >
        {selectedSkipId === skip.id ? "Selected" : "Select This Skip"}
      </Button>
    </StyledSkipCard>
  </Grid>
);

export default Skip;
