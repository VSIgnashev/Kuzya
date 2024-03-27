import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import BlenderIcon from "@mui/icons-material/Blender";

type requiredTool = string;

interface MealListCardProps {
  imagePath?: string;
  requiredTools?: requiredTool[];
}

const MealListCard: React.FC<MealListCardProps> = ({
  imagePath = "./src/assets/placeholder-image.jpg",
}) => {
  return (
    <CardActionArea sx={{ maxWidth: 320, height: 502 }}>
      <Card sx={{ maxWidth: 320, height: 502 }}>
        <CardMedia component="img" height="240" image={imagePath} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Title
          </Typography>
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

export default MealListCard;
