import { useEffect } from "react";
import IngredientCard from "../../components/IngredientCard";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { fetchIngredients } from "../../store/ingredientsSlice";

const IngredientsList: React.FC = () => {
  const ingredients = useAppSelector((state) => state.ingredients.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <div className="mt-20" onClick={() => console.log(typeof ingredients)}>
        asaasddsas
      </div>
      {ingredients.map((item) => {
        return (
          <>
            <IngredientCard
              name={item.name}
              calories={item.nutrients.calories}
              proteins={item.nutrients.proteins}
              carbohydrates={item.nutrients.carbohydrates}
              fats={item.nutrients.fats}
              key={item.id}
              imageId={item.avatarId}
            />
          </>
        );
      })}
    </>
  );
};

export default IngredientsList;
