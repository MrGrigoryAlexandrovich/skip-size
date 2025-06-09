import { Box, Chip } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)({
  padding: "24px",
  maxWidth: 1200,
  margin: "0 auto",
});

export const StyledSkipCard = styled(Box)<{ selected: boolean }>(
  ({ selected }) => ({
    cursor: "pointer",
    backgroundColor: selected ? "#111827" : "#1e1e1e",
    color: "#f9fafb",
    borderRadius: 16,
    padding: 24,
    textAlign: "left",
    position: "relative",
    border: selected ? "2px solid #00C897" : "1px solid #2c2c2c",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      border: "2px solid #00C897",
      backgroundColor: selected ? "111827" : "#282f3c",
    },
  })
);

export const StyledSkipImage = styled("img")({
  width: "100%",
  height: 192,
  objectFit: "contain",
  borderRadius: 8,
});

export const StyledSizeChip = styled(Chip)({
  position: "absolute",
  top: 12,
  right: 12,
  backdropFilter: "blur(4px)",
  color: "#fff",
  fontWeight: 600,
});
