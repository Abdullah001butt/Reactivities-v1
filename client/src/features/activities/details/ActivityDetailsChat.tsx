import { Box, Typography, Card, CardContent, TextField, Avatar, CircularProgress, Paper, Divider, IconButton } from "@mui/material";
import { Link, useParams } from "react-router";
import { useComments } from "../../../lib/hooks/useComment";
import { timeAgo } from "../../../lib/util/util";
import { useForm, type FieldValues } from "react-hook-form";
import type React from "react";
import { observer } from "mobx-react-lite";
import { Send } from "@mui/icons-material";

const ActivityDetailsChat = observer(function ActivityDetailsChat() {
    const { id } = useParams()
    const { commentStore } = useComments(id)
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

    const addComment = async (data: FieldValues) => {
        try {
            await commentStore.hubConnection?.invoke('SendComment', {
                activityId: id,
                body: data.body
            })
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            handleSubmit(addComment)()
        }
    }

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    color: 'white',
                    padding: 3,
                    textAlign: 'center',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                        borderRadius: '2px'
                    }
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Event Discussion
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    Join the conversation about this event
                </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
                {/* Comment Input */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        mb: 3,
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease',
                        '&:focus-within': {
                            borderColor: '#64748b',
                            boxShadow: '0 0 0 3px rgba(100, 116, 139, 0.1)'
                        }
                    }}
                >
                    <form onSubmit={handleSubmit(addComment)}>
                        <Box sx={{ position: 'relative' }}>
                            <TextField
                                {...register('body', { required: true })}
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                placeholder="Share your thoughts about this event..."
                                onKeyDown={handleKeyPress}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px',
                                        backgroundColor: 'white',
                                        '& fieldset': {
                                            borderColor: 'transparent'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#cbd5e1'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#64748b'
                                        }
                                    }
                                }}
                            />
                            {isSubmitting && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 12,
                                        transform: 'translateY(-50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    <CircularProgress size={20} sx={{ color: '#64748b' }} />
                                    <Typography variant="caption" sx={{ color: '#64748b' }}>
                                        Sending...
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                color: '#64748b', 
                                mt: 1, 
                                display: 'block',
                                fontSize: '0.75rem'
                            }}
                        >
                            Press Enter to send, Shift + Enter for new line
                        </Typography>
                    </form>
                </Paper>

                {/* Comments List */}
                <Box
                    sx={{
                        maxHeight: 400,
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '6px'
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f5f9',
                            borderRadius: '3px'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#cbd5e1',
                            borderRadius: '3px',
                            '&:hover': {
                                background: '#94a3b8'
                            }
                        }
                    }}
                >
                    {commentStore.comments.length === 0 ? (
                        <Box
                            sx={{
                                textAlign: 'center',
                                py: 4,
                                color: '#64748b'
                            }}
                        >
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                No comments yet
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Be the first to share your thoughts!
                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {commentStore.comments.map((comment, index) => (
                                <Box key={comment.id}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                            p: 2,
                                            borderRadius: '12px',
                                            background: 'white',
                                            border: '1px solid #f1f5f9',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                borderColor: '#e2e8f0',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }
                                        }}
                                    >
                                        <Avatar
                                            src={comment.imageUrl}
                                            alt={`${comment.displayName}'s avatar`}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                border: '2px solid #f1f5f9'
                                            }}
                                        />
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                    mb: 1
                                                }}
                                            >
                                                <Typography
                                                    component={Link}
                                                    to={`/profiles/${comment.userId}`}
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#1e293b',
                                                        textDecoration: 'none',
                                                        fontSize: '0.9rem',
                                                        '&:hover': {
                                                            color: '#6366f1',
                                                            textDecoration: 'underline'
                                                        }
                                                    }}
                                                >
                                                    {comment.displayName}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        width: 4,
                                                        height: 4,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#cbd5e1'
                                                    }}
                                                />
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: '#64748b',
                                                        fontSize: '0.75rem'
                                                    }}
                                                >
                                                    {timeAgo(comment.createdAt)}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                sx={{
                                                    color: '#374151',
                                                    lineHeight: 1.5,
                                                    whiteSpace: 'pre-wrap',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {comment.body}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    {index < commentStore.comments.length - 1 && (
                                        <Divider sx={{ my: 1, opacity: 0.3 }} />
                                    )}
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Paper>
    )
})

export default ActivityDetailsChat