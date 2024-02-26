"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Stack,
  Slider,
  Drawer,
  Toolbar,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useSidebarState } from "@/app/(hooks)/sidebarContext";
import { drawerStyle } from "./muiStyles";

const Sidebar = () => {
  const { sidebarState, updateSidebarState } = useSidebarState();
  const [localState, setLocalState] = useState({
    minPrice: 1,
    maxPrice: 10000,
    minRating: 0.1,
    maxRating: 5,
    isFavourite: false,
  });

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setLocalState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (event: Event, value: number | number[]) => {
    const name = event.target?.name;

    setLocalState((prev) => ({ ...prev, [name]: value }));
  };
  const handleFavChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.checked;

    setLocalState((prev) => ({ ...prev, [name]: value }));
  };

  //Updating Context state with local state
  const handleApply = () => {
    updateSidebarState(localState);
  };

  //Clearing local and context states
  const handleClear = () => {
    const obj = {
      minPrice: 1,
      maxPrice: 10000,
      minRating: 0.1,
      maxRating: 5,
      isFavourite: false,
    };
    setLocalState(obj);
    updateSidebarState(obj);
  };

  return (
    <Drawer variant="permanent" sx={drawerStyle}>
      <Toolbar sx={{ height: 80, mb: 2 }} />
      <Typography variant="h6" fontWeight="bold" mt={2} px={2}>
        Filters
      </Typography>
      <Typography fontSize={16} fontWeight="bold" mt={1} px={2}>
        Price:
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        paddingX={2}
        paddingY={1}
        gap={1}
      >
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Min"
          name="minPrice"
          variant="outlined"
          value={localState?.minPrice}
          onChange={(e) => handlePriceChange(e)}
          InputProps={{ inputProps: { min: 0, max: 99999 } }}
        />
        -
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Max"
          name="maxPrice"
          variant="outlined"
          value={localState?.maxPrice}
          onChange={(e) => handlePriceChange(e)}
          InputProps={{ inputProps: { min: 0, max: 99999 } }}
        />
      </Box>
      <Typography fontSize={16} fontWeight="bold" mt={1} paddingX={2}>
        Rating:
      </Typography>
      <Box paddingX={2}>
        <Stack direction="row" alignItems="center">
          <Typography mr={1} fontSize={14} gutterBottom>
            Min:
          </Typography>
          <Slider
            name="minRating"
            value={localState?.minRating || 0}
            onChange={handleRatingChange}
            defaultValue={1}
            valueLabelDisplay="auto"
            shiftStep={0.1}
            step={0.1}
            min={0.1}
            max={5}
          />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography mr={1} fontSize={14} gutterBottom>
            Max:
          </Typography>
          <Slider
            name="maxRating"
            value={localState?.maxRating || 0}
            onChange={handleRatingChange}
            defaultValue={5}
            valueLabelDisplay="auto"
            shiftStep={0.1}
            step={0.1}
            min={0.1}
            max={5}
          />
        </Stack>
      </Box>
      <Stack
        paddingX={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" mt={1} mr={1} fontSize={14} gutterBottom>
          Favourite:
        </Typography>
        <Checkbox
          name="isFavourite"
          icon={<FavoriteBorder />}
          onChange={handleFavChange}
          checked={localState?.isFavourite}
          checkedIcon={<Favorite color="error" />}
        />
      </Stack>
      <Box px={2} mt={2} gap={1} display={"flex"} justifyContent={"center"}>
        <Button variant="outlined" onClick={() => handleClear()}>
          Clear
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => handleApply()}
        >
          Apply
        </Button>
      </Box>

      {/* <Box sx={{ overflow: "auto" }}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box> */}
    </Drawer>
  );
};

export default Sidebar;
