'use client';

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const font = Inter({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
});

export function Menu({
  width,
  open = true,
  onClose,
}: {
  width: number;
  open: boolean;
  onClose: () => void;
}) {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      textAlign="center"
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
      aria-label="folders"
      display="contents"
    >
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width,
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            width,
          }}
          className={font.className}
        >
          <Box sx={theme.mixins.toolbar} />
          <Divider />
          <List>
            {['Info'].map((text) => (
              <ListItem
                key={text}
                sx={{
                  width,
                }}
              >
                <ListItemIcon>
                  <DashboardIcon sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
