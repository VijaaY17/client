import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { Root, StyledPaper, FormContainer, ButtonSubmit } from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      await dispatch(updatePost(currentId, postData));
    } else {
      await dispatch(createPost(postData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
    // Reset the file input field
    document.querySelector("input[type='file']").value = '';
  };

  return (
    <Root>
      <StyledPaper>
        <FormContainer noValidate autoComplete="off" onSubmit={handleSubmit}>
          <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </div>
          <ButtonSubmit variant="contained" color="primary" type="submit">
            Submit
          </ButtonSubmit>
          <ButtonSubmit variant="contained" size="small" color="secondary" onClick={clear}>
            Clear
          </ButtonSubmit>
        </FormContainer>
      </StyledPaper>
    </Root>
  );
};

export default Form;




