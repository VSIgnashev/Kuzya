import { useEffect } from "react";
import MealCard from "../../components/MealCard";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { fetchRecipes } from "../../store/recipesSlice";

export const MealsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.recipes.list);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <>
      {list?.map((item, i) => {
        return (
          <MealCard
            recipeId={item.id}
            key={i}
            // imageId={item.files[0].id}
            title={item.name}
            cookingTime={item.cookingTime}
            servings={item.servingsCount}
            calories={100}
            fats={100}
            proteins={100}
            carbohydrates={100}
          />
        );
      })}
    </>
  );
};
