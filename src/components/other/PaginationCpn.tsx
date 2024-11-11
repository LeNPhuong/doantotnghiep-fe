import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

const PaginationCpn: React.FC<{
  size: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ size, setCount }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCount(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(size / 10)}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem style={{ width: '35px', height: '35px' }} {...item} />
        )}
      />
    </Stack>
  );
};

export default PaginationCpn;
