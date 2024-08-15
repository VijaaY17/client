import { styled } from '@mui/system';
import { AppBar, Typography } from '@mui/material';

const CustomAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const CustomTypography = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
});

const CustomImage = styled('img')({
  marginLeft: '15px',
});



export { CustomAppBar, CustomTypography, CustomImage };
