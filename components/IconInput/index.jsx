import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        gridTemplateColumns: "270px 270px",
        gridGap: 10,
        borderWidth: 20,
        borderColor: "#0089ff",
        maxWidth: "448px",
        width: "100%"
      }}
    >
      <IconTextField sx={{ borderColor: "var(--head-color)", color: "var(--head-color)", backgroundColor: "var(--bs-inner-color)",}} label="Purchase amount" iconStart={<AttachMoneyIcon sx={{ color: "var(--head-color)", fontSize: 20 }} />}/>
      <IconTextField sx={{ borderColor: "var(--head-color)", color: "var(--head-color)", backgroundColor: "var(--bs-inner-color)",}} label="Points" iconStart={<AccountCircle sx={{ color: "var(--head-color)", fontSize: 20 }}/>} />
    </Box>
  );
}
 
export const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      sx={{
      "& label": {
        "&.Mui-focused": {
          color: 'white'
        }
      },
      borderWidth: 30,
      borderColor: "white",
      }}
      {...props}
      InputLabelProps={{style : {color : 'var(--head-color)', fontSize: "18px"} }}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};