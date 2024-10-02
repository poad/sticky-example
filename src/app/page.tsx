'use client';
import { Box, Typography, Paper } from '@mui/material';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { data } from './data';

interface Data {
  name: string;
  h: number;
  a: number;
  b: number;
  c: number;
  d: number;
  s: number;
  type1: string;
  type2: string;
}

function Home() {
  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'h', header: 'H' },
      { accessorKey: 'b', header: 'B' },
      { accessorKey: 'c', header: 'C' },
      { accessorKey: 'd', header: 'D' },
      { accessorKey: 's', header: 'S' },
      { accessorKey: 'type1', header: 'タイプ１' },
      { accessorKey: 'type2', header: 'タイプ２' },
    ],
    [],
  );

  return (
    <>
      <Box
        component="main"
        sx={{
          marginTop: '64px',
          width: '100%',
          flexGrow: 1,
          maxHeight: 'calc(100vh - 64px)',
          overflow: 'scroll',
        }}
      >
        <Box
          sx={{
            margin: '0',
            width: '100%',
            paddingTop: '80px',
            lineHeight: '1.15',
          }}
        >
          <Typography component="h1" align="center" fontSize="3rem">
            mui with sticky table
          </Typography>
        </Box>

        <Paper elevation={0}>
          <MaterialReactTable
            muiTableContainerProps={({table}) =>({
              sx: {
                height: table.getState().isFullScreen ? '100vh' : 'calc(100vh - 80px - 4.5rem)',
              },
            })}
            columns={columns}
            data={data}
            enableRowNumbers
            enableRowVirtualization
            enablePagination={false}
            enableBottomToolbar={false}
          />
        </Paper>
      </Box>
    </>
  );
}

export default Home;
