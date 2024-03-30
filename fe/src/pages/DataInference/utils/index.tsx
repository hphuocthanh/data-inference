import { ReactNode } from 'react';

export const getColumnsFromResponse = (response: any) => {
  const columns = response.columns;

  return Object.entries(columns).map(([columnName, type]) => ({
    field: columnName,
    label: columnName,
    headerName: (
      <div>
        <div>{columnName}</div>
        <div style={{ fontSize: 'smaller', color: 'gray' }}>{type as string}</div>
      </div>
    ),
  }));
};

export const getDTypesFromResponse = (response: any): string[] => {
  const columns = response.columns;
  return Object.values(columns);
};
export const getRowsFromResponse = (response: any) => response.rows;
