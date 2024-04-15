import { useEffect } from "react";
import IngredientCard from "../../components/IngredientCard";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { fetchIngredients } from "../../store/ingredientsSlice";
import { Button } from "@mui/material";

const IngredientsList: React.FC = () => {
  const ingredients = useAppSelector((state) => state.ingredients.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {ingredients.map((item) => {
        return (
          <>
            <IngredientCard
              name={item.name}
              calories={item.calories}
              proteins={item.proteins}
              carbohydrates={item.carbohydrates}
              fats={item.fats}
              key={item.id}
              imageId={item?.files[0]?.id ? item.files[0].id : undefined}
            />
          </>
        );
      })}
    </>
  );
};

export default IngredientsList;
