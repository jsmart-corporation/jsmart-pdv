import { MuiChipsInput } from 'mui-chips-input';
import { FormControl, TextField, styled } from "@mui/material";

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

export const JSFormControl = styled(FormControl)`
  && {
    .MuiInputLabel-root {
      color: var(--text); // Cor padrão do rótulo
    }
    &:focus-within .MuiInputLabel-root {
      color: var(--text); // Cor do rótulo quando o FormControl está em foco
    }
    & .MuiSelect-root {
        color: #fff; // Cor do texto do Select igual à do TextField
    }
    & .MuiSelect-icon {
        color: #FFF; // Cor do ícone do Select igual à do TextField
    }
    & .MuiSelect-select:focus {
        background-color: transparent; // Fundo do Select quando em foco
    }
    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--green); // Cor do contorno quando o Select está em foco
    }
    & .MuiSelect-select {
        &:not([value=""]) {
          color: #fff; // Cor do texto do Select quando um item está selecionado
        }
    }
    & .MuiSelect-select::placeholder {
        color: #ccc; // Cor do placeholder do Select
      }
  }
`;
export const JSTextChips = styled(MuiChipsInput)`
  && {
    .MuiInputLabel-root {
      color: var(--text); // Cor padrão do rótulo
    }
    &:focus-within .MuiInputLabel-root {
      color: var(--text); // Cor do rótulo quando o FormControl está em foco
    }
    & .MuiSelect-root {
        color: #fff; // Cor do texto do Select igual à do TextField
    }
    & .MuiSelect-icon {
        color: #FFF; // Cor do ícone do Select igual à do TextField
    }
    & .MuiSelect-select:focus {
        background-color: transparent; // Fundo do Select quando em foco
    }
    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--green); // Cor do contorno quando o Select está em foco
    }
    & .MuiSelect-select {
        &:not([value=""]) {
          color: #fff; // Cor do texto do Select quando um item está selecionado
        }
    }
    & .MuiSelect-select::placeholder {
        color: #ccc; // Cor do placeholder do Select
      }
  }
`;
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