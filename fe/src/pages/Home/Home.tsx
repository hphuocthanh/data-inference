import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return <Container sx={{ py: 2, position: 'relative' }}>{/* <Outlet /> */}</Container>;
};

export default Home;
