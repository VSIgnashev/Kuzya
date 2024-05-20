import { Typography } from "@mui/material";
import { BASE_URL } from "../../api/axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import useAppSelector from "../../hooks/useAppSelector";
import { useParams } from "react-router";

const DOWNLOAD_IMAGE_URL = "/files";

export const Meal: React.FC = () => {
  const { recipeId } = useParams();

  const currentRecipe = Number(recipeId);

  const list = useAppSelector((state) => state.recipes.list);

  const recipe = list[currentRecipe - 1];

  const renderIngredients = () => {
    return (
      <div className="">
        {recipe.entries.map((item) => {
          return (
            <div className="w-[300px] flex">
              <Typography>{item.ingredient.name} </Typography>
              <div className="border-b w-full"></div>
              <Typography> {item.amount}</Typography>
              <Typography ml={"4px"}> {item.measure.name}</Typography>
            </div>
          );
        })}
      </div>
    );
  };

  const renderInstruction = () => {
    return (
      <div className="flex flex-col gap-y-1 ">
        {recipe.steps.map((item) => {
          return (
            <>
              <Typography align="left">
                {item.step}.{item.description}
              </Typography>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-[100px]  flex flex-col gap-y-[10px] lg:w-[868px] md:w-[700px] sm:w-[600px] ">
      <Typography fontWeight={700} align="left" variant="h1" fontSize={"45px"}>
        {recipe.name}
      </Typography>

      <div className="w-full">
        {/* <img
          className="aspect-video object-cover"
          width={"100%"}
          src={BASE_URL + DOWNLOAD_IMAGE_URL + `/${recipe.files[0].id}`}
        /> */}
        <div className="mt-[5px] flex items-center justify-between">
          <div className="flex items-center">
            <AccessTimeIcon sx={{ width: "34px", height: "34px" }} />
            <Typography ml={"5px"} fontSize={"25px"} fontWeight={300}>
              {Math.floor(recipe.cookingTime / 60)} hour{" "}
              {recipe.cookingTime - Math.floor(recipe.cookingTime / 60) * 60}{" "}
              minutes
            </Typography>
            <div className="ml-1">
              <img src="src\assets\plate_icon.svg" />
            </div>
            <Typography fontSize={"25px"} fontWeight={300}>
              {recipe.servingsCount}
            </Typography>
          </div>
          {/* <div className="flex">
            <BlenderIcon sx={{ width: "40px", height: "40px" }} />
            <MicrowaveIcon sx={{ width: "40px", height: "40px" }} />
          </div> */}
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-y-4 ">
        <Typography textTransform={"uppercase"} align="left" fontSize={30}>
          Nutrition
        </Typography>
        <div className="flex justify-between gap-x-1 xs:flex-wrap">
          <div className="flex gap-x-2">
            <Typography fontSize={30} fontWeight={300}>
              kcal
            </Typography>
            <Typography fontSize={30} fontWeight={400}>
              {recipe.calories} 100
            </Typography>
          </div>
          <div className="">
            {" "}
            <Typography
              fontSize={30}
              fontWeight={300}
              sx={{ color: "rgba(0, 0, 0, 0.4)" }}
            >
              |
            </Typography>
          </div>
          <div className="flex gap-x-2">
            <Typography fontSize={30} fontWeight={300}>
              fat
            </Typography>

            <Typography fontSize={30} fontWeight={400}>
              {recipe.fats} 400
            </Typography>
          </div>
          <div className="">
            {" "}
            <Typography
              fontSize={30}
              fontWeight={300}
              sx={{ color: "rgba(0, 0, 0, 0.4)" }}
            >
              |
            </Typography>
          </div>
          <div className="flex gap-x-2">
            {" "}
            <Typography fontSize={30} fontWeight={300}>
              carbs
            </Typography>
            <Typography fontSize={30} fontWeight={400}>
              {recipe.carbohydrates} 666
            </Typography>
          </div>
          <div className="">
            <Typography
              fontSize={30}
              fontWeight={300}
              sx={{ color: "rgba(0, 0, 0, 0.4)" }}
            >
              |
            </Typography>{" "}
          </div>
          <div className="flex gap-x-2">
            {" "}
            <Typography fontSize={30} fontWeight={300}>
              protein
            </Typography>
            <Typography fontSize={30} fontWeight={400}>
              {recipe.proteins} 524
            </Typography>
          </div>
        </div>
      </div>
      <Typography
        mt={"30px"}
        variant="h2"
        fontSize={"30px"}
        fontWeight={400}
        textTransform={"uppercase"}
        align="left"
      >
        Ingredients
      </Typography>
      {renderIngredients()}
      <Typography
        mt={"15px"}
        variant="h3"
        fontSize={"30px"}
        fontWeight={400}
        textTransform={"uppercase"}
        align="left"
      >
        Method
      </Typography>
      {renderInstruction()}
    </div>
  );
};
