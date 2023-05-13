'use client';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';


interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const data = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

function Home() {
  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'code', header: 'ISO\u00a0Code' },
      { accessorKey: 'population', header: 'Population' },
      { accessorKey: 'size', header: 'Size\u00a0(km\u00b2)' },
      { accessorKey: 'density', header: 'Density' },
    ],
    []
  );

  const theme = useTheme();
  return (
    <>
      <Box component="main" sx={{ marginTop: '64px', width: '100%', flexGrow: 1, maxHeight: 'calc(100vh - 64px)', overflow: 'scroll' }}>
        <Box sx={{
          margin: '0',
          width: '100%',
          paddingTop: '80px',
          lineHeight: '1.15',
        }}>
          <Typography
            component='h1'
            align='center'
            fontSize='48px'
            color={theme.palette.text.primary}
          >
            mui with sticky table
          </Typography>
        </Box>

        <Paper sx={{ width: '100%', overflow: 'revert' }} elevation={0}>
          <MaterialReactTable
            enableStickyHeader
            muiTableContainerProps={{ sx:{ height: 'calc(100vh - 64px)', overflow: 'revert' } }}
            columns={columns} 
            data={data} 
          />
        </Paper>
      </Box>
    </>
  );
};

export default Home;
