import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export default function ChipsArray() {
  const chipData = [
    { key: 0, label: 'JavaScript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'ArcGIS Online' },
    { key: 3, label: 'Git' },
    { key: 4, label: 'Microsoft Teams' },
    { key: 5, label: 'HTML' },
    { key: 6, label: 'CSS' },
    { key: 7, label: 'Java Spring Boot' },
    { key: 8, label: 'QGIS' },
    { key: 8, label: 'SQL' }
  ];

  return (
    <Paper 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        boxShadow: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {

        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}