import { Pagination, Stack } from '@mui/material';
import React, { SetStateAction } from 'react';

const Paginate: React.FC<{
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  length: number;
}> = ({ page, setPage, length }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setPage(value);
  };
  return (
    <Stack spacing={1}>
      <Pagination
        count={Math.ceil(length / 6)}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Paginate;
