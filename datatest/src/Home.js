
import React, { useEffect, useState } from "react";
import List from "@material-ui/core";
import ListItem from "@material-ui/core";
import ListItemText from "@material-ui/core";
import ListSubheader from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

const Home = () => {
    const [data, _data] = useState([]);
    const [pageCount, _pageCount] = useState();
    const [page, _Page] = useState(1);

    useEffect(() => {
        fetch("https://gorest.co.in/public/v1/users?page=" + page)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                _pageCount(data.meta.pagination.total);
                _data(data.data);
            });
    }, [page]);
    const handleChange = (event, value) => {
        _Page(value);
    };

    return (
        <>
            <Box>
                {data.map((item, i) => (
                    <>
                        <Box sx={{ border: "1px solid black", p: 2 }}>
                            <Link to={'/user/'+item.id} state={{item:item }}>
                                {i + 1}... {item.name}
                            </Link>
                        </Box>
                    </>
                ))}
            </Box>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={pageCount} page={page} onChange={handleChange} />
            </Stack>
        </>
    );
};

export default Home;

