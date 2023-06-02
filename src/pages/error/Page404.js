import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from '../authentication/AuthWrapper';

// ================================|| LOGIN ||================================ //

const Page404 = () => {
    return(
        <AuthWrapper>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                <Typography variant="h3">Page not found</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography component={Link} to=".." variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Back to from page
                </Typography>
            </Grid>
            </Grid>
        </AuthWrapper>
    )};

export default Page404;
