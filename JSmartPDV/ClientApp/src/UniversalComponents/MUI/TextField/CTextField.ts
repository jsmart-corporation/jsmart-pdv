import { Drawer, Select, TextField, styled } from "@mui/material";

export const JSTextFieldLarge = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: var(--green);
    }
    &.Mui-focused fieldset {
      border-color: var(--green);
    }
  }
  & .MuiInputLabel-root.Mui-focused {
    color: var(--text);
  }
  & .MuiInputBase-input {
    color: var(--text);
    font-size: 1.5rem;
    padding: 15px ;
   
  }
  & .MuiOutlinedInput-notchedOutline {
   
  }
`;

export const JSTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: var(--green);
    }
    &.Mui-focused fieldset {
      border-color: var(--green);
    }
  }
  & .MuiInputLabel-root.Mui-focused {
    color: var(--text);
  }
  & .MuiInputBase-input {
    color: var(--text);
   
  }
  & .MuiOutlinedInput-notchedOutline {
   
  }
`;


export const JSDrawer = styled(Drawer)`
  & .MuiDialog-root {
    z-index: 1000 !important;
  }
`;