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
    marginBottom: "10px",
    "& fieldset": {
      fontFamily: "Poppins",
      borderColor: "#EDEDED",
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
