import { styled } from '@mui/system';
import { Card, Typography } from '@mui/material'; // Add this import

const CardMedia = styled('div')(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#f0f0f0',
  position: 'relative',
  borderRadius: '15px 15px 0 0',
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '5px 10px',
  borderRadius: '5px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
}));

const Overlay2 = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));

const Details = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '10px 20px',
}));

const Title = styled('div')(({ theme }) => ({
  padding: '0 16px',
  borderBottom: '1px solid #ddd',
  marginBottom: '8px',
}));

const CardActions = styled('div')(({ theme }) => ({
  padding: '10px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid #ddd',
  backgroundColor: '#f9f9f9',
}));

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline',
  marginRight: '5px',
  color: '#007BFF',
  fontWeight: 'bold',
}));

const TimeCreated = styled(Typography)(({ theme }) => ({
  color: '#aaa',
  fontSize: '0.875rem',
  marginTop: '4px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
}));

export { CardContainer, CardMedia, Overlay, Overlay2, Details, Title, CardActions, Tag, TimeCreated };


