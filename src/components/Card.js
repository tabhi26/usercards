import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const Cards = ({user}) => {
  return (
    <Card sx={{ height: 200, width: 300, boxShadow: 5, margin: 2 }}>
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
    </Card>
  );
};

export default Cards;
