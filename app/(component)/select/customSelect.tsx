import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { dropdownSelect } from "./muiStyles";
import { useTopbarState } from "@/app/(hooks)/topbarContext";
import { SelectChangeEvent } from "@mui/material";

interface CustomSelectProps {
  label: string;
  list: string[];
  keyName: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  list,
  keyName,
}) => {
  const { topbarState, updateState } = useTopbarState();

  const handleSelect = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value;
    console.log(value);
    updateState(keyName, value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        name={label}
        label={label}
        sx={dropdownSelect}
        onChange={(e) => handleSelect(e)}
        value={topbarState[keyName]}
        // MenuProps={MenuProps}
      >
        <MenuItem value={"all"}>
          <Typography>All</Typography>
        </MenuItem>
        {list.map((option, idx) => (
          <MenuItem key={idx} value={option}>
            <Typography>{option}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
