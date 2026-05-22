import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project } from '../data/projects';

const categoryColors: Record<Project['category'], 'primary' | 'secondary' | 'default'> = {
  'Full Stack': 'primary',
  'Frontend': 'secondary',
  'Personal': 'default',
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip
          label={project.category}
          color={categoryColors[project.category]}
          size="small"
          sx={{ mb: 1.5 }}
        />
        <Typography variant="h6" component="h3" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
        {project.liveUrl && (
          <Button
            size="small"
            variant="contained"
            startIcon={<OpenInNewIcon />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
