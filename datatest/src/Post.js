import { Box, Typography } from '@material-ui/core';
import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Post = () => {
    const [data, _data] = useState([]);
    const [pageCount, _pageCount] = useState();
    const [page, _Page] = useState(1);

    useEffect(() => {
        fetch("https://gorest.co.in/public/v1/posts")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                _pageCount(data.meta.pagination.total);
                _data(data.data);
            });
    }, []);
    const handleChange = (event, value) => {
        _Page(value);
    };
    return (
        <>
            <Box>
                {data.map((item, i) => (
                    <>
                        <Box sx={{ border: "1px solid black", p: 2 }}>
                            <Link to={'/post/' + item.id} state={{ item: item }}>
                                {i + 1}... {item.title}
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
    )
}

export default Post