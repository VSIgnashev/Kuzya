import MealCard from "../../components/MealCard";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function Meals() {
  return (
    <div>
      <div className="fixed bottom-10 right-[50px] z-10">
        <Fab color="primary">
          <AddIcon></AddIcon>
        </Fab>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 mt-[50px] items-center max-w-[1076px]">
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
        <MealCard title="title" cookingTime={45} />
      </div>
    </div>
  );
}

export default Meals;
<MealCard title="title" cookingTime={45} />;
