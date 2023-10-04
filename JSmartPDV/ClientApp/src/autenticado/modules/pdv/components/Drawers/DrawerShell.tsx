/* eslint-disable no-undef */
import { Drawer, DialogTitle, DialogContent, styled } from "@mui/material";
import { JSDrawer } from "../../../../../UniversalComponents/MUI/TextField/CTextField";


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
  padding: 16px;


`;
export default function DrawerShell(props: DrawerShellProps) {
  return (
    <JSDrawer anchor={"right"} open={props.open} onClose={props.onClose} style={{zIndex: 1000}}>
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
    </JSDrawer>
  );
}
