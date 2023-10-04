import { FormControl, InputLabel, Select, styled } from "@mui/material";

export const WhiteSelect = styled(Select)`
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
    & .MuiSelect-root {
        color: var(--text); // Cor do texto do Select igual à do TextField
    }
    & .MuiSelect-icon {
        color: var(--text); // Cor do ícone do Select igual à do TextField
    }
    & .MuiSelect-select:focus {
        background-color: transparent; // Fundo do Select quando em foco
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--green); // Cor do contorno quando o Select está em foco
    }
`;

export const WhiteLabel = styled(InputLabel)`
    && {
    .MuiInputLabel-root {
      color: #fff; // Cor padrão do rótulo
    }

    &:focus-within .MuiInputLabel-root {
      color: #fff; // Cor do rótulo quando o FormControl está em foco
    }
    
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    .MuiInputLabel-root {
      color: #FFF; // Cor padrão do rótulo
    }
    &:focus-within .MuiInputLabel-root {
      color: #f0f0f0; // Cor do rótulo quando o FormControl está em foco
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
        border-color: #fff; // Cor do contorno quando o Select está em foco
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #FFF; // Cor do contorno quando o Select está em foco
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
