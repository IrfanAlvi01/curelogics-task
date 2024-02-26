import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductProps } from "@/app/(utils)/interfaces";

const CustomCard: React.FC<ProductProps> = ({
  productName,
  category,
  price,
  rating,
  imageUrl,
  favorite,
  description,
  brand,
  onFavoriteToggle,
}) => {
  return (
    <Card sx={{ maxWidth: 260, margin: 1, minWidth: 250 }}>
      <CardMedia
        component="img"
        height="194"
        src="https://images.unsplash.com/photo-1601126374163-29f78d5e6d9c?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Rating
            size="small"
            name="rating"
            value={rating}
            readOnly
            precision={0.1}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <IconButton aria-label="add to favorites" onClick={onFavoriteToggle}>
            <FavoriteIcon color={favorite == true ? "error" : "disabled"} />
          </IconButton>
        </Stack>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description?.slice(0, 50).concat("...")}
        </Typography>
        <Stack mt={2} direction="row" gap={1}>
          <Typography variant="body2">Price:</Typography>
          <Typography variant="body2" color="Highlight">
            {price}$
          </Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <Typography variant="body2">Category:</Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <Typography variant="body2">Brand:</Typography>
          <Typography variant="body2" color="text.secondary">
            {brand?.name}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
