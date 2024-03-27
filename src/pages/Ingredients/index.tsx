import IngredientCard from "../../components/IngredientCard";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateIngredient from "../../components/CreateIngredient";

function Ingredients() {
  return (
    <div className="">
      <div className="fixed bottom-10 mt-24 right-[50px] z-10">
        <Fab color="primary">
          <AddIcon></AddIcon>
          <CreateIngredient></CreateIngredient>
        </Fab>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[976px]">
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </div>
    </div>
  );
}

export default Ingredients;
