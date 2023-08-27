'use client';

import {
  AppBar,
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { StyledSwitch } from '../StyledSwitch';

export function Header({
  darkMode,
  onMenuClick,
  onThemeChange,
}: {
  darkMode: boolean;
  onMenuClick: () => void;
  onThemeChange: (darkMode: boolean) => void;
}) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            marginRight: 0,
            marginLeft: 'auto',
          }}
        >
          <FormGroup>
            <FormControlLabel
              sx={{
                marginRight: 0,
              }}
              control={
                <StyledSwitch
                  theme={theme}
                  sx={{ m: 1 }}
                  onChange={(_, checked) => onThemeChange(checked)}
                  checked={darkMode}
                />
              }
              label="Dark Mode"
            />
          </FormGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
