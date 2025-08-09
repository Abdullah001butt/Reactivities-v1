import { DateTimePicker } from '@mui/x-date-pickers';
import { useController, type UseControllerProps, type FieldValues } from 'react-hook-form';
import type { DateTimePickerProps } from '@mui/x-date-pickers';

type Props<T extends FieldValues> = UseControllerProps<T> & Omit<DateTimePickerProps<any>, 'value' | 'onChange'>;

export default function DateTimeInput<T extends FieldValues>({
    name,
    control,
    rules,
    defaultValue,
    ...pickerProps
}: Props<T>) {
    const { field, fieldState } = useController({ name, control, rules, defaultValue });

    return (
        <DateTimePicker
            {...pickerProps}
            value={field.value ? new Date(field.value) : null}
            onChange={value => field.onChange(value)}
            sx={{ width: '100%' }}
            slotProps={{
                textField: {
                    onBlur: field.onBlur,
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message,
                },
            }}
        />
    );
}
