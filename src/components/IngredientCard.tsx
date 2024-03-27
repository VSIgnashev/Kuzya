import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

function IngredientCard() {
  return (
    <div>
      <CardActionArea sx={{}}>
        <Card sx={{ width: 200, height: 350 }}>
          <CardMedia
            component="img"
            sx={{ aspectRatio: 4 / 3 }}
            image="./src/assets/placeholder-image.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              Title
            </Typography>

            <Divider sx={{ mt: 1 }} />
            <div className="mt-3 gap-y-1 flex flex-col items-start">
              <Typography>Calories: 100</Typography>
              <Typography>Proteins: 100</Typography>
              <Typography>Fats: 100</Typography>
              <Typography>Carbohydrates: 100</Typography>
            </div>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default IngredientCard;
