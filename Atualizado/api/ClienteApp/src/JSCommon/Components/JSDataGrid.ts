import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const JSDataGrid = styled(DataGrid)(() => ({
  border: "2px solid",
  borderColor: "transparent",
  boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",

  "& .MuiDataGrid-cell:hover": {
    color: "var(--text)",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "var(--background-secondary)",
    "&.Mui-selected": {
      backgroundColor: "var(--buttons)",
      "&:hover": {
        backgroundColor: "var(--buttons)",
      },
    },
    "&:hover": {
      backgroundColor: "var(--hover-table-row)",
    },
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "var(--background-secondary)",
  },

  "& .MuiDataGrid-cell": {
    color: "var(--text)",
    borderColor: "var(--background-primary)",
    "border-bottom": "2px solid var(--hover-table-row)",
  },
  "& .MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },

  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "var(--secondary)",
    color: "var(--text)",
    "border-bottom": "2px solid var(--primary)",
    "& .MuiDataGrid-colCellTitle": {
      color: "var(--text)",
    },
  },

  "& .MuiTablePagination-root": {
    color: "var(--text)",
  },
  "&.MuiDataGrid-root": {
    backgroundColor: "var(--secondary)",
  },
  "& .MuiDataGrid-footerContainer": {
    "border-top": "2px solid var(--primary)",
  },
}));

export default JSDataGrid;