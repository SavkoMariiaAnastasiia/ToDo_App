import React from 'react';
import {TextField} from "@mui/material";

const Serch = (props: any) => {
    return (
        <TextField
            id="outlined-basic"
            label="search"
            variant="outlined"
            value={props.value}
            onChange={props.onChange}
            sx={{ minWidth: 320 }}
        />
    );
};

export default Serch;