import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea, CardHeader, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToTeam } from "../redux/userSlice";

const Cards = ({user}) => {
  const dispatch = useDispatch();
  const team = useSelector((state)=> state.user.team);

  const handleClick = (user) => {
    dispatch(addToTeam(user));
  }
  return (
    <Card sx={{ height: 220, width: 300, boxShadow: 5, margin: 2 }}>
      <CardActionArea>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe">
                <CardMedia
                    component="img"
                    image={user.avatar}
                    alt="green iguana"
                />
            </Avatar>
            }
            title={`${user.first_name} ${user.last_name}`}
            subheader={user.gender}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.domain}
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body2"
            color="text.secondary"
          >
            {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
        {(user.available && !team.department.includes(user.domain)) ? 
        (<Button sx={{marginLeft: "70%"}} variant="contained" onClick={()=> {handleClick(user)}}>Add</Button>) : ""}
    </Card>
  );
};

export default Cards;
