import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          Arsidee
        </Typography>
        <Button
          color="inherit"
          startIcon={<GitHubIcon />}
          href="https://github.com/Arsidee"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}
