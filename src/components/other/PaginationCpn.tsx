import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

const PaginationCpn: React.FC<{}> = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={8}
        variant="outlined"
        shape="rounded"
        color="primary"
        renderItem={(item) => (
          <PaginationItem style={{ width: '35px', height: '35px' }} {...item} />
        )}
      />
    </Stack>
  );
};

export default PaginationCpn;
