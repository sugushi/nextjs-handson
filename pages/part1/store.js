import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  container: css`
    // background-color: red;
  `,
  box: css`
    // background-color: blue;
  `,
};

const Store = () => {
  const [keyword, setKeyword] = React.useState('');

  return (
    <Container component="main" maxWidth="xs" css={styles.container}>
      <Box
        component="form"
        noValidate
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        css={styles.box}
      >
        <Typography>検索ワード: {keyword}</Typography>
        <TextField
          label="キーワードを入力してください"
          variant="standard"
          margin="normal"
          fullWidth
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <Button
          variant="contained"
          margin="normal"
          fullWidth
          onClick={() => {
            setkeywork('');
          }}
        >
          検索
        </Button>
      </Box>
    </Container>
  );
};

export default Store;
