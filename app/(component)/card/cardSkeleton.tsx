import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductProps } from "@/app/(utils)/interfaces";

const imageURL =
  "https://images.unsplash.com/photo-1601126374163-29f78d5e6d9c?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const CustomCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 260, margin: 1, minWidth: 250 }}>
      {/* Skeleton for Card Media */}
      <Skeleton variant="rectangular" width="100%" height={194} />

      <CardContent>
        {/* Skeleton for Rating and Favorite Icon */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Skeleton variant="circular" width={40} height={40} />

          <Skeleton variant="circular" width={40} height={40} />
        </Stack>

        {/* Skeleton for Product Name and Description */}

        <Skeleton variant="text" height={24} />
        <Skeleton variant="text" height={60} />

        {/* Skeleton for Category and Brand */}
        <Stack mt={2} direction="row" gap={1}>
          <Skeleton variant="text" height={16} width={80} />
          <Skeleton variant="text" height={16} width={80} />
        </Stack>
        <Stack direction="row" gap={1}>
          <Skeleton variant="text" height={16} width={80} />
          <Skeleton variant="text" height={16} width={80} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCardSkeleton;
