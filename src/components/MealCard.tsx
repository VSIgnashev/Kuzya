import { Favorite } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
  Stack,
  CardContent,
} from "@mui/material";
import BlenderIcon from "@mui/icons-material/Blender";

interface MealCardProps {
  imagePath?: string;
  title: string;
  cookingTime: number;
}

const MealCard: React.FC<MealCardProps> = ({
  imagePath = "./src/assets/placeholder-image.jpg",
  title,
  cookingTime,
}) => {
  return (
    <CardActionArea sx={{ maxWidth: 320, height: 502 }}>
      <Card sx={{ maxWidth: 320, height: 502 }}>
        <CardMedia component="img" height="240" image={imagePath} />
        <CardHeader
          title={title}
          action={<Favorite />}
          sx={{ textAlign: "left", fontSize: 24 }}
          subheader={"Cooking time: " + cookingTime}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            Description
          </Typography>
          <Divider sx={{ mt: 1 }} />
          <Stack sx={{ mt: 1 }} direction="row">
            <BlenderIcon />
            <BlenderIcon />
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default MealCard;
