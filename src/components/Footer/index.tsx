import { Box, useTheme } from '@mui/material';

export function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{ height: '2.5rem', backgroundColor: theme.palette.primary.main }}
    />
  );
}
