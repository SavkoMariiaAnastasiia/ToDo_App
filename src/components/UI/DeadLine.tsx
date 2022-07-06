import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function DeadLine() {
    return (
        <Stack component="form" noValidate spacing={3}>
            <TextField
                id="datetime-local"
                label="DeadLine"
                type="datetime-local"
                defaultValue="2023-05-24T10:30"
                sx={{ width: 200 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Stack>
    );
}
