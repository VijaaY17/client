// import React from 'react'
// import { styled } from '@mui/system';
// import useStyles from './styles';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import moment from 'moment';



// const Post = ({post}) =>{
//   const classes = useStyles()
//   return(
//     <Card className='classes.card'>
//       <CardMedia image={post.selectedFile} title={post.title}/>
//       <div>
//         <Typography variant='h6'>{post.creator}</Typography>
//         <Typography variant='body'>{moment(post.createdAt).fromNow()}</Typography>
//       </div>

//       <div className={classes.overlay2}>
//         <Button style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="default" /></Button>
//       </div>
//       <div className={classes.details}>
//         <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//       </div>
//       <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
//       </CardContent>
//       <CardActions className={classes.cardActions}>
//         <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
//         <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
//       </CardActions>
//     </Card>
//   )
// }

// export default Post


// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia as MuiCardMedia, Button, Typography } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import moment from 'moment';
// import { CardMedia, CardContainer, Overlay, Overlay2, Details, Title, CardActions as CardActionsStyled } from './styles';

// const Post = ({ post ,setCurrentId}) => {
//   return (
//     <CardContainer>
//       <MuiCardMedia
//         component="img"
//         className={CardMedia}
//         image={post.selectedFile}
//         title={post.title}
//       />
//       <Overlay>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//       </Overlay>
//       <Overlay2>
//         <Button style={{ color: 'white' }} size="small" onClick={()=>setCurrentId(post._id)}>
//           <MoreHorizIcon fontSize="default" />
//         </Button>
//       </Overlay2>
//       <Details>
//         <Typography variant="body2" color="textSecondary" component="h2">
//           {post.tags.map((tag) => `#${tag} `)}
//         </Typography>
//       </Details>
//       <Title>
//         <Typography gutterBottom variant="h5" component="h2">
//           {post.title}
//         </Typography>
//       </Title>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {post.message}
//         </Typography>
//       </CardContent>
//       <CardActionsStyled>
//         <Button size="small" color="primary">
//           <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
//         </Button>
//         <Button size="small" color="primary">
//           <DeleteIcon fontSize="small" /> Delete
//         </Button>
//       </CardActionsStyled>
//     </CardContainer>
//   );
// };

// export default Post;


// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia as MuiCardMedia, Button, Typography } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import moment from 'moment';
// import { CardMedia, CardContainer, Overlay, Overlay2, Details, Title, CardActions as CardActionsStyled } from './styles';

// const Post = ({ post, setCurrentId }) => {
//   return (
//     <CardContainer>
//       <MuiCardMedia
//         component="img"
//         className={CardMedia}
//         image={post.selectedFile}
//         title={post.title}
//       />
//       <Overlay>
//         <Typography variant="h6" style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
//           {post.creator}
//         </Typography>
//         <Typography variant="body2" style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </Overlay>
//       <Overlay2>
//         <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
//           <MoreHorizIcon fontSize="default" />
//         </Button>
//       </Overlay2>
//       <Details>
//         <Typography variant="body2" color="textSecondary" component="h2">
//           {post.tags.map((tag) => `#${tag} `)}
//         </Typography>
//       </Details>
//       <Title>
//         <Typography gutterBottom variant="h5" component="h2" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
//           {post.title}
//         </Typography>
//       </Title>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
//           {post.message}
//         </Typography>
//       </CardContent>
//       <CardActionsStyled>
//         <Button size="small" color="primary">
//           <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
//         </Button>
//         <Button size="small" color="primary">
//           <DeleteIcon fontSize="small" /> Delete
//         </Button>
//       </CardActionsStyled>
//     </CardContainer>
//   );
// };

// export default Post;

import React from 'react';
import { CardContent, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { CardContainer, CardMedia, Overlay, Overlay2, Details, Title, CardActions } from './styles';
import {  useDispatch } from 'react-redux';
import { deletePost,likePost} from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  return (
    <CardContainer>
      <CardMedia
        style={{ backgroundImage: `url(${post.selectedFile})` }}
      />
      <Overlay>
        <Typography variant="h6" style={{ color: 'white' }}>
          {post.creator}
        </Typography>
        <Typography variant="body2" style={{ color: 'white' }}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Overlay>
      <Overlay2>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="small" />
        </Button>
      </Overlay2>
      <CardContent style={{ backgroundColor: 'white', padding: '16px' }}>
        <Details>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </Details>
        <Title>
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#333' }}>
            {post.title}
          </Typography>
        </Title>
        <Typography variant="body2" color="textSecondary" component='p' style={{ color: '#555' }}>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> &nbsp; Like&nbsp; {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </CardContainer>
  );
};

export default Post;









