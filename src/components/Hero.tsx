import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        px: 3,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#fff',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Ryan Dilley
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.8, mb: 4, fontWeight: 400 }}>
        Frontend &amp; Full Stack Developer
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 560, mx: 'auto', opacity: 0.7, mb: 5, lineHeight: 1.8 }}
      >
        Building interactive web experiences with a focus on clean UI and practical functionality.
        Based in Omaha, Nebraska.
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<GitHubIcon />}
        href="https://github.com/Arsidee"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: '#fff' } }}
      >
        View GitHub Profile
      </Button>
    </Box>
  );
}
