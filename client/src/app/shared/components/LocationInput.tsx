import { useEffect, useMemo, useState } from "react";
import { useController, type UseControllerProps, type FieldValues } from "react-hook-form";
import { Box, debounce, List, ListItemButton, TextField, Typography } from "@mui/material";
import axios from "axios";

type Props<T extends FieldValues> = {
    label: string;
} & UseControllerProps<T>;

export default function LocationInput<T extends FieldValues>({
    name,
    control,
    rules,
    defaultValue,
    label
}: Props<T>) {
    const { field, fieldState } = useController({ name, control, rules, defaultValue });
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (field.value && typeof field.value === 'object') {
            setInputValue(field.value.venue || '');
        } else {
            setInputValue('');
        }
    }, [field.value]);

    const locationUrl = 'https://api.locationiq.com/v1/autocomplete?key=pk.79062427704c0527bde7b2a3eab356a0&limit=5&dedupe=1&';

    const fetchSuggestions = useMemo(() =>
        debounce(async (query: string) => {
            if (!query || query.length < 3) {
                setSuggestions([]);
                return;
            }
            setLoading(true);
            try {
                const res = await axios.get<LocationIQSuggestion[]>(`${locationUrl}q=${query}`);
                setSuggestions(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }, 500), []);

    const handleChange = async (value: string) => {
        setInputValue(value);
        await fetchSuggestions(value);
    };

    const handleSelect = (location: LocationIQSuggestion) => {
        const city = location.address?.city || location.address?.town || location.address?.village;
        const venue = location.display_name;
        const latitude = Number(location.lat);
        const longitude = Number(location.lon);
        const newValue = { city, venue, latitude, longitude };
        field.onChange(newValue);
        setInputValue(venue);
        setSuggestions([]);
    };

    return (
        <Box>
            <TextField
                label={label}
                value={inputValue}
                onChange={e => handleChange(e.target.value)}
                fullWidth
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
            />
            {loading && <Typography>Loading...</Typography>}
            {suggestions.length > 0 && (
                <List sx={{ border: 1 }}>
                    {suggestions.map(suggestion => (
                        <ListItemButton
                            divider
                            key={suggestion.place_id}
                            onClick={() => handleSelect(suggestion)}
                        >
                            {suggestion.display_name}
                        </ListItemButton>
                    ))}
                </List>
            )}
        </Box>
    );
}
