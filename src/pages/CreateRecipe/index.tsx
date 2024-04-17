import CreationCard from "./CreationCard";

import "../../utilities/uploadImageSt.scss";
import { CreateMainParams } from "./CreateMainParams";
import { CreateIngredientsCard } from "./CreateIngredients";
import useAppSelector from "../../hooks/useAppSelector";

export type setter = () => void;

function CreateRecipe() {
  const { name, time, requiredTools, servingsQty } = useAppSelector(
    (state) => state.createRecipe
  );

  return (
    <div className="mt-12 flex flex-col gap-y-4">
      CreateRecipe
      <CreationCard className="mb-10">
        <div className="flex flex-col gap-y-4">
          <div className="">name: {name}</div>
          <div className="">time: {time}</div>
          <div className="">servings: {servingsQty}</div>
          <div className="border-2">
            {" "}
            {requiredTools.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </CreationCard>
      <CreateMainParams />
      <CreateIngredientsCard />
    </div>
  );
}

export default CreateRecipe;
