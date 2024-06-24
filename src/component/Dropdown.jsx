import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import game_name from "../component/allgames/Assets/game_name";
import game_name_second from "../component/allgames/Assets/game_name_second";
import { Link } from "react-router-dom";
export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ color: "white", fontSize: "20px" }}
          id="demo-simple-select-label"
        >
          Our All Games
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <Grid container spacing={2}>
                      <Grid item xs={ 6 }>
                      {game_name.map((list, index) => {
                          return (
                            <Link to={`/AllGame/${list.name.split(" ").join("_")}`}>
              <MenuItem sx={{color:"black"}} value={10}>{list.name}</MenuItem>
              </Link>
              );
            })}
            </Grid>
            <Grid item xs={6}>
            {game_name_second.map((list, index) => {
                          return (
                            <Link to={`/AllGame/${list.name.split(" ").join("_")}`}>
              <MenuItem sx={{color:"black"}} value={10}>{list.name}</MenuItem>
              </Link>
              );
            })}
            </Grid>
          </Grid>
        </Select>
      </FormControl>
    </Box>
  );
}
