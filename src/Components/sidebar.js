import { Button, Grid } from "@material-ui/core";
import { RichTreeView } from "@mui/x-tree-view";
import React from "react";

const Sidebar = (item) => {
  const [sideWidth, setSideWidth] = ueState(8);
  const ListItems = item || [
    {
      id: "grid",
      label: "Data Grid",
      children: [
        { id: "grid-community", label: "@mui/x-data-grid" },
        { id: "grid-pro", label: "@mui/x-data-grid-pro" },
        { id: "grid-premium", label: "@mui/x-data-grid-premium" },
      ],
    },
    {
      id: "pickers",
      label: "Date and Time Pickers",
      children: [
        { id: "pickers-community", label: "@mui/x-date-pickers" },
        { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
      ],
    },
    {
      id: "charts",
      label: "Charts",
      children: [{ id: "charts-community", label: "@mui/x-charts" }],
    },
    {
      id: "tree-view",
      label: "Tree View",
      children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
    },
  ];

  return (
    <>
      <Container fixed={true} sx={{ outerHeight: 100, innerWidth: sideWidth }}>
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
          <Grid sm={12}>
            <Button onClick={setSideWidth(2)}> X </Button>
          </Grid>
          <RichTreeView items={ListItems} />
        </Box>
      </Container>
    </>
  );
};

export default Sidebar;
