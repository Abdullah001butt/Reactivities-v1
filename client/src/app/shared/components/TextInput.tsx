import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import { useController, type UseControllerProps, type FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

export default function TextInput<T extends FieldValues>({
    name,
    control,
    rules,
    defaultValue,
    ...textFieldProps
}: Props<T>) {
    const { field, fieldState } = useController({ name, control, rules, defaultValue });

    return (
        <TextField
            {...field}
            {...textFieldProps}
            value={field.value ?? ''}
            fullWidth
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
        />
    );
}
