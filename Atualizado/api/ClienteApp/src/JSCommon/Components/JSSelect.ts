import { FormControl, styled } from "@mui/material";

export const JSSelect = styled(FormControl)`
  && {
    .MuiInputLabel-root {
      color: var(--text); // Cor padrão do rótulo
    }
    &:focus-within .MuiInputLabel-root {
      color: var(--text) // Cor do rótulo quando o FormControl está em foco
    }
    & .MuiSelect-root {
      color: var(--text) // Cor do texto do Select igual à do TextField
    }
    & .MuiSelect-icon {
        color: var(--green); // Cor do ícone do Select igual à do TextField
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
          color: var(--text) // Cor do texto do Select quando um item está selecionado
        }
    }
    & .MuiSelect-select::placeholder {
        color: #ccc; // Cor do placeholder do Select
      }
  }
`;
