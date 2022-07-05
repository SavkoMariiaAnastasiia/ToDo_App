import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const SortBySelect = (props: any) => {
    const handleChange = (event: SelectChangeEvent) => {
        props.setStatus(event.target.value);
    };

    return (
        <FormControl variant="standard" color={'success'} sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">sort</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={props.status}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={'all'}>all</MenuItem>
                <MenuItem value={'in process'}>in process</MenuItem>
                <MenuItem value={'done'}>done</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortBySelect;