"use client";
import React, { ChangeEvent } from "react";
import { useTopbarState } from "@/app/(hooks)/topbarContext";
import { AppBar, TextField, Toolbar, Typography } from "@mui/material";
import CustomSelect from "../select/customSelect";

const Topbar = () => {
  const { topbarState, updateState } = useTopbarState();

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    updateState("searchTerm", value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "cornsilk",
      }}
    >
      <Toolbar sx={{ height: 80 }}>
        <Typography variant="h6" noWrap component="div" color="tomato">
          Assessment
        </Typography>
        <TextField onChange={(e) => handleSearch(e)} variant="outlined" />
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
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
