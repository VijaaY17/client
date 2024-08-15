import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FormContainer = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const FileInput = styled('input')({
  width: '97%',
  margin: '10px 0',
});

const ButtonSubmit = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),

  
}));


export { Root, StyledPaper, FormContainer, FileInput, ButtonSubmit };
