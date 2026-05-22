import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories: Project['category'][] = ['Full Stack', 'Frontend', 'Personal'];

export default function ProjectsSection() {
  return (
    <Box component="section" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center' }} gutterBottom>
          Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 500, mx: 'auto', textAlign: 'center' }}
        >
          A collection of work spanning full stack applications, frontend utilities, and personal
          experiments.
        </Typography>

        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <Box key={category} sx={{ mb: 8 }}>
              <Typography variant="h4" component="h3" sx={{ mb: 4, borderBottom: '2px solid', borderColor: 'primary.main', pb: 1, display: 'inline-block' }}>
                {category}
              </Typography>
              <Grid container spacing={3}>
                {categoryProjects.map((project) => (
                  <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
