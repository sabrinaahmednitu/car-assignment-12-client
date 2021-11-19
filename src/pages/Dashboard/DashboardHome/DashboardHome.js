import { Grid } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <h2 className="text-info fw-bold " >Welcome To My Dashboard</h2>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;