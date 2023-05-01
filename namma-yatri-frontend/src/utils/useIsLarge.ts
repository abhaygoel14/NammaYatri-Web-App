import { useMediaQuery, useTheme } from "@mui/material";

/**
 * A custom React hook that returns a boolean indicating whether the current screen size is considered "large" based on the Material-UI theme breakpoints.
 * @returns {boolean} - true if the screen size is considered "large", false otherwise.
 */
function useIsLargeView() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("sm"));
}
export default useIsLargeView;
