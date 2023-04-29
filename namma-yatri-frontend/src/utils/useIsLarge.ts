import { useMediaQuery, useTheme } from "@mui/material";

function useIsLargeView() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("sm"));
}

export default useIsLargeView;
