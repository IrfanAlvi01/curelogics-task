export const dropdownSelect = {
  minWidth: "250px",
  borderRadius: 3,
  color: "#9B9B9B",
  textAlign: "left",
  ".MuiSvgIcon-root ": {
    fill: "#9B9B9B",
  },
  ":before": { borderBottomColor: "#9B9B9B", opacity: "48%" },
  ":after": { borderBottomColor: "#9B9B9B", opacity: "48%" },
  "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
    borderBottom: `2px solid #9B9B9B`,
    opacity: "48%",
  },
};

export const drawerStyle = {
  width: 240,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 240,
    overflowX: "hidden",
    boxSizing: "border-box",
    backgroundColor: "whitesmoke",
  },
};

export const textfieldStyle = {
  input: {
    color: "primary.fontColor",
    fontFamily: "Poppins",
  },
  label: {
    color: "primary.fontColor",
    fontFamily: "Poppins",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      fontFamily: "Poppins",
      borderColor: "#9B9B9B",
      borderRadius: 3,
    },
    "& label": {},
    "&:hover fieldset": {
      borderColor: "#7D8EA3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7D8EA3",
    },
  },
};
