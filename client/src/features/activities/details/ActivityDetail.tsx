import { CardMedia, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void
}
const ActivityDetail = ({ selectedActivity, cancelSelectActivity, openForm }: Props) => {
  const { activities } = useActivities();
  const activity = activities?.find(x => x.id === selectedActivity.id)
  if (!activity) return <Typography>Loading...</Typography>;
  return (
    <Card sx={{
      borderRadius: { xs: '8px', sm: '12px' },
      border: '1px solid #e4e4e7',
      backgroundColor: 'white',
      boxShadow: 'none',
      maxWidth: { xs: '100%', sm: '600px', md: '800px' },
      mx: 'auto',
      '&:hover': {
        borderColor: '#d4d4d8',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        transition: 'all 0.2s ease',
      }
    }}>
      <CardMedia
        component='img'
        src={`/images/categoryImages/${activity.category}.jpg`}
        sx={{
          height: { xs: '200px', sm: '250px', md: '300px' },
          objectFit: 'cover',
          borderBottom: '1px solid #e4e4e7'
        }}
      />
      <CardContent sx={{
        p: { xs: 3, sm: 4, md: 6 }
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '700',
            color: '#09090b',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            lineHeight: 1.2
          }}
        >
          {activity.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#71717a',
            fontWeight: '600',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}
        >
          {new Date(activity.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#52525b',
            lineHeight: 1.6,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            fontWeight: '400'
          }}
        >
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions sx={{
        px: { xs: 3, sm: 4, md: 6 },
        pb: { xs: 3, sm: 4, md: 6 },
        pt: 0,
        display: 'flex',
        gap: { xs: 2, sm: 3 },
        flexDirection: { xs: 'column', sm: 'row' }
      }}>
        <Button
          sx={{
            backgroundColor: '#09090b',
            color: 'white',
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: '8px',
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 1.25 },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            boxShadow: 'none',
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#18181b',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
            }
          }}
          onClick={() => openForm(activity.id)}
        >
          Edit
        </Button>
        <Button
          sx={{
            borderColor: '#e4e4e7',
            color: '#dc2626',
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: '8px',
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 1.25 },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            border: '1px solid #e4e4e7',
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              borderColor: '#dc2626',
              backgroundColor: 'rgba(220, 38, 38, 0.04)',
            }
          }}
          onClick={cancelSelectActivity}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}
export default ActivityDetail