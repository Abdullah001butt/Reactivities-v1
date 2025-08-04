import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import type { FormEvent } from "react"

type Props = {
    activity?: Activity
    closeForm: () => void
    submitForm: (activity: Activity) => void
}

const ActivityForm = ({ activity, closeForm, submitForm }: Props) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((value, key) => {
            data[key] = value
        })
        if (activity) data.id = activity.id 
        submitForm(data as unknown as Activity)
    }
    return (
        <Paper sx={{
            borderRadius: { xs: '8px', sm: '12px' },
            border: '1px solid #e4e4e7',
            backgroundColor: 'white',
            boxShadow: 'none',
            padding: { xs: 3, sm: 4, md: 6 },
            maxWidth: { xs: '100%', sm: '600px', md: '700px' },
            mx: 'auto',
            '&:hover': {
                borderColor: '#d4d4d8',
                transition: 'border-color 0.2s ease',
            }
        }}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    color: '#09090b',
                    fontWeight: '700',
                    mb: { xs: 3, sm: 4 },
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    lineHeight: 1.2
                }}
            >
                Create Activity
            </Typography>
            <Box
                component='form'
                display='flex'
                onSubmit={handleSubmit}
                flexDirection='column'
                gap={{ xs: 2.5, sm: 3 }}
            >
                <TextField
                    name='title'
                    label='Title'
                    defaultValue={activity?.title}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <TextField
                    name='description'
                    label='Description'
                    defaultValue={activity?.description}
                    multiline
                    rows={3}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <TextField
                    name='category'
                    label='Category'
                    defaultValue={activity?.category}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <TextField
                    name='date'
                    label='Date'
                    defaultValue={activity?.date}
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <TextField
                    name='city'
                    label='City'
                    defaultValue={activity?.city}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <TextField
                    name='venue'
                    label='Venue'
                    defaultValue={activity?.venue}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            '& fieldset': {
                                borderColor: '#e4e4e7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d4d4d8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#09090b',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#71717a',
                            fontWeight: '500',
                            '&.Mui-focused': {
                                color: '#09090b',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#09090b',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                        },
                    }}
                />
                <Box
                    display='flex'
                    justifyContent={{ xs: 'stretch', sm: 'flex-end' }}
                    gap={{ xs: 2, sm: 3 }}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    mt={{ xs: 1, sm: 2 }}
                >
                    <Button
                        sx={{
                            borderColor: '#e4e4e7',
                            color: '#71717a',
                            fontWeight: '600',
                            textTransform: 'none',
                            borderRadius: '8px',
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1.5, sm: 1.25 },
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            border: '1px solid #e4e4e7',
                            minWidth: { xs: 'auto', sm: '100px' },
                            '&:hover': {
                                borderColor: '#d4d4d8',
                                backgroundColor: '#f4f4f5',
                            }
                        }}
                        onClick={closeForm}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
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
                            minWidth: { xs: 'auto', sm: '100px' },
                            '&:hover': {
                                backgroundColor: '#18181b',
                                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}
export default ActivityForm