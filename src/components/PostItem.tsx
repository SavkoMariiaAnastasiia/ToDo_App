import React from 'react';
import {Button} from "@mui/material";
import {Root} from "../styles/App";

const PostItem = (props: any) => {
    console.log(props);
    return (
        <div>
            <Root>
                <div>
                    <strong>1.Stady </strong>
                    <br/>fsdfshsfdhfh</div>
                <Button variant="outlined" color="error" size="small">delete</Button>
            </Root>
        </div>
    );
};

export default PostItem;