/* eslint-disable no-undef */
import { DialogTitle, DialogContent, styled, Drawer } from "@mui/material";


interface DrawerShellProps {
  title: string;
  open: boolean;
  onClose: () => void;
  content: JSX.Element;
  dialogWidth: number;
}
const StyledDialogTitle = styled(DialogTitle)`
  background: var(--green);
  color: #fff;
  text-align: center;
  box-shadow: 0 0 0.4rem #000;
  height: 65px

`;
export default function DrawerShell(props: DrawerShellProps) {
  let numero = -1;
  var soma = 2;
  console.log(soma + numero)
  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.onClose} style={{zIndex: 1000}}>
      <div
        style={{
          maxWidth: props.dialogWidth,
          width: props.dialogWidth,
          overflow: "hidden",
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          background: 'var(--background-primary)',
        }}
      >
        <StyledDialogTitle
        >
          {props.title}
        </StyledDialogTitle>
        <div style={{ overflow: "auto", height: "calc(100vh - 40px)",display: 'flex',flexDirection: 'column',flex: 1 }}>
          <DialogContent style={{ padding: 0,display: 'flex',flexDirection: 'column',flex: 1 }}>{props.content}</DialogContent>
        </div>
      </div>
    </Drawer>
  );
}
