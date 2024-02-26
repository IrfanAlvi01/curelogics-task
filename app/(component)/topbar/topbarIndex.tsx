"use client";
import React, { ChangeEvent } from "react";
import { useTopbarState } from "@/app/(hooks)/topbarContext";
import {
  Box,
  Stack,
  Toolbar,
  AppBar,
  TextField,
  Typography,
} from "@mui/material";
import CustomSelect from "../select/customSelect";
import { textfieldStyle } from "./muiStyles";

const Topbar = () => {
  const { topbarState, updateTopbarState } = useTopbarState();

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    updateTopbarState("searchTerm", value);
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "whitesmoke",
        borderBottom: "2px solid #D7D7D7",
      }}
    >
      <Toolbar>
        <Typography
          width={240}
          variant="h6"
          fontFamily="Poppins"
          noWrap
          component="div"
          color="tomato"
        >
          Assessment
        </Typography>
        <Stack
          paddingLeft={3}
          width={"100%"}
          direction="row"
          justifyContent="space-between"
        >
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            onChange={(e) => handleSearch(e)}
            sx={textfieldStyle}
          />
          <Box display="flex" gap={2}>
            <CustomSelect
              label="Categories"
              list={topbarState.categories}
              keyName="selectedCategory"
            />
            <CustomSelect
              label="Brands"
              list={topbarState.brands}
              keyName="selectedBrand"
            />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
