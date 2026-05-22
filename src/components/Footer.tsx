import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: '#fff',
      }}
    >
      <IconButton
        href="https://github.com/Arsidee"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#fff', mb: 1 }}
        aria-label="GitHub profile"
      >
        <GitHubIcon />
      </IconButton>
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        &copy; {year} Ryan Dilley. Built with React &amp; Material UI.
      </Typography>
    </Box>
  );
}
