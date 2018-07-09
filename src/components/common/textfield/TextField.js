import React from 'react';
import Text from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


function TextField(props) {
  return (
    <Text
      {...props}
    />
  )
}

export default TextField;