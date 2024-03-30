import { FC, useState } from 'react';
import { DataGrid, GridColDef, GridColumnHeaderParams, GridRow, GridRowSelectionModel } from '@mui/x-data-grid';
import { Box, Stack } from '@mui/material';

interface CustomDataGridProps {
  columns: GridColDef[];
  rows: Array<{ [key: string]: any }>; // Define a more specific type based on your data structure
  dtypes: string[];
}

const CustomDataGrid: FC<CustomDataGridProps> = ({ columns, rows, dtypes }) => {
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  const handleSelection = (newSelection: GridRowSelectionModel) => {
    setSelectionModel(newSelection);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleSelection}
        rowSelectionModel={selectionModel}
        onColumnHeaderDoubleClick={(params) => {
          // TO-DO: change column data type
          alert(`You've clicked ${params.field}`);
        }}
      />
    </div>
  );
};

export default CustomDataGrid;
