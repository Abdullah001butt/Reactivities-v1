import { Button, Card, CardActions, CardContent, Chip, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { CalendarToday, LocationOn } from "@mui/icons-material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate } from "react-router";

type Props = {
  activity: Activity;
}

const ActivityCard = ({ activity }: Props) => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { deleteActivity } = useActivities()

  return (
    <Card
      sx={{
        borderRadius: { xs: '6px', sm: '8px' },
        border: '1px solid #e4e4e7',
        backgroundColor: 'white',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          borderColor: '#d4d4d8',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }
      }}
    >
      <CardContent sx={{
        p: { xs: 2, sm: 3, md: 4 },
        flex: 1
      }}>
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          sx={{
            fontWeight: '600',
            color: '#09090b',
            mb: { xs: 1.5, sm: 2 },
            lineHeight: 1.3,
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
          }}
        >
          {activity.title}
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.5, sm: 1 },
          mb: { xs: 1.5, sm: 2 },
          flexWrap: 'wrap'
        }}>
          <CalendarToday sx={{
            fontSize: { xs: 14, sm: 16 },
            color: '#71717a',
            flexShrink: 0
          }} />
          <Typography
            sx={{
              color: '#71717a',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: '500'
            }}
          >
            {new Date(activity.date).toLocaleDateString('en-US', {
              weekday: isMobile ? undefined : 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: '#52525b',
            mb: { xs: 2, sm: 3 },
            lineHeight: 1.5,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            display: '-webkit-box',
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {activity.description}
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: { xs: 0.5, sm: 1 },
          flexWrap: 'wrap'
        }}>
          <LocationOn sx={{
            fontSize: { xs: 14, sm: 16 },
            color: '#71717a',
            flexShrink: 0,
            mt: 0.25
          }} />
          <Typography
            sx={{
              color: '#71717a',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: '500',
              lineHeight: 1.4
            }}
          >
            {activity.city}, {isTablet && activity.venue.length > 30
              ? `${activity.venue.substring(0, 30)}...`
              : activity.venue}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 2, sm: 3, md: 4 },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1.5, sm: 0 },
        width: '100%'
      }}>
        <Chip
          label={activity.category}
          sx={{
            backgroundColor: '#f4f4f5',
            color: '#52525b',
            border: '1px solid #e4e4e7',
            borderRadius: '6px',
            fontWeight: '500',
            fontSize: { xs: '0.6875rem', sm: '0.75rem' },
            textTransform: 'capitalize',
            height: { xs: '24px', sm: '28px' },
            alignSelf: { xs: 'flex-start', sm: 'center' },
            '&:hover': {
              backgroundColor: '#e4e4e7'
            }
          }}
        />
        <Box display='flex' gap={2}>
          <Button
            size={isMobile ? "medium" : "small"}
            variant="contained"
            fullWidth={isMobile}
            onClick={() => navigate(`/activities/${activity.id}`)}
            sx={{
              backgroundColor: '#09090b',
              color: 'white',
              fontWeight: '500',
              textTransform: 'none',
              borderRadius: '6px',
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1 },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              boxShadow: 'none',
              minWidth: { xs: 'auto', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#18181b',
                boxShadow: 'none',
              }
            }}
          >
            View
          </Button>
          <Button
            size={isMobile ? "medium" : "small"}
            variant="contained"
            fullWidth={isMobile}
            disabled={deleteActivity.isPending}
            onClick={() => deleteActivity.mutate(activity.id)}
            sx={{
              backgroundColor: 'red',
              color: 'white',
              fontWeight: '500',
              textTransform: 'none',
              borderRadius: '6px',
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1 },

              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              boxShadow: 'none',
              minWidth: { xs: 'auto', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'red',
                boxShadow: 'none',
              }
            }}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
export default ActivityCard