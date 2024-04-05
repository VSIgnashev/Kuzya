import IngredientCard from "../../components/IngredientCard";
import useAppSelector from "../../hooks/useAppSelector";

const IngredientsList: React.FC = () => {
  const ingredients = useAppSelector((state) => state.ingredients.list);

  return (
    <>
      {ingredients.map((item) => {
        return (
          <IngredientCard
            name={item.name}
            calories={item.calories}
            proteins={item.proteins}
            carbohydrates={item.carbohydrates}
            fats={item.fats}
            key={item.id}
          />
        );
      })}
    </>
  );
};

export default IngredientsList;
