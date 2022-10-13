import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

export const PaginationControlled = ({setPage, page, types}) => {
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

useEffect(() => {
setPage(0)
}, [types])

  return (
    <Stack spacing={2}>
      <Pagination count={58} page={page} onChange={handleChange}/>
    </Stack>
  );
}