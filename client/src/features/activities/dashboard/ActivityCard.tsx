import { Button, Card, CardContent, Chip, Typography, Box, useTheme, useMediaQuery, CardHeader, Avatar, Divider } from "@mui/material";
import { AccessTime, Place } from "@mui/icons-material";
import { Link, useNavigate } from "react-router";
import { formatDate } from "../../../lib/util/util";
import AvatarPopover from "../../../app/shared/components/AvatarPopover";

type Props = {
  activity: Activity;
}

const ActivityCard = ({ activity }: Props) => {

  const label = activity.isHost ? 'You are hosting' : 'You are going'
  // const isCancelled = false
  const color = activity.isHost ? 'secondary' : activity.isGoing ? 'warning' : 'default'

  const navigate = useNavigate()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      elevation={3}
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
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <CardHeader
          avatar={<Avatar src={activity.hostImageUrl} sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          alt="image of host"
          titleTypographyProps={{
            fontWeight: 'bold',
            fontSize: 20
          }}
          subheader={
            <>
              Hosted by{' '}
              <Link to={`/profiles/${activity.hostId}`}>
                {activity.hostDisplayName}
              </Link>
            </>
          }
        />
        <Box display='flex' flexDirection='column' gap={2} mr={2}>
          {(activity.isHost || activity.isGoing) && <Chip variant="outlined" label={label} color={color} sx={{ borderRadius: 2 }} />}
          {activity.isCancelled && <Chip variant="outlined" label='Cancelled' color="error" sx={{ borderRadius: 2 }} />}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{
        p: 0,
      }}>
        <Box display='flex' alignItems='center' mb={2} px={2}>
          <Box display='flex' flexGrow={0} alignItems='center'>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>
              {formatDate(activity.date)}
            </Typography>
          </Box>
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box display='flex' gap={2} sx={{ backgroundColor: 'grey.200', py: 3, pl: 3 }}>
          {activity.attendees.map(att => (
            <AvatarPopover profile={att} key={att.id} />
          ))}
        </Box>
      </CardContent>

      <CardContent
        sx={{ pb: 2 }}
      >
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          size={isMobile ? "medium" : "small"}
          variant="contained"
          fullWidth={isMobile}
          onClick={() => navigate(`/activities/${activity.id}`)}
          sx={{
            display: 'flex',
            justifySelf: 'self-end',
            borderRadius: 3
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  )
}
export default ActivityCard