import {
  IconButton,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import CreationCard from "./CreationCard";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchIngredients } from "../../store/ingredientsSlice";
import useAppSelector from "../../hooks/useAppSelector";
import Ingredients from "../Ingredients";
import {
  changeIngredientAmount,
  changeIngredientMeasure,
  changeIngredientName,
} from "../../store/createRecipeSlice";

export const CreateIngredientsCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.ingredients);
  const { entries } = useAppSelector((state) => state.createRecipe);

  const measures = [
    {
      name: "Grams",

      id: 1,
    },
    { name: "tbs", id: 2 },
    { name: "kg", id: 3 },
  ];

  const [amoutOfIngredients, setAmountOfIngredients] = useState<number>(1);
  const [aaa, setAaa] = useState<string>("");

  // const renderIngredients = () =>{

  //   return  (

  //   )
  // }

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputId: number
  ) => {
    const value = event.target.value;
    if (value == "") {
      dispatch(changeIngredientAmount({ id: inputId, amount: value }));
    }
    if (!Number(value) || value.length > 5) {
      return;
    }

    dispatch(changeIngredientAmount({ id: inputId, amount: Number(value) }));
  };

  return (
    <CreationCard className="w-[766px]">
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-3 w-full items-center">
          <Select
            onChange={(event: SelectChangeEvent) => {
              const newValue = Number(event.target.value);

              if (typeof newValue == "number") {
                dispatch(
                  changeIngredientName({
                    id: 0,
                    ingredientId: Number(event.target.value),
                  })
                );
              }
            }}
            value={String(entries[0].ingredientId)}
            fullWidth
            size="medium"
            variant="outlined"
          >
            {list.map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>

          <TextField
            size="medium"
            variant="outlined"
            label="Amount"
            onChange={(event) => handleAmountChange(event, 0)}
            value={entries[0].amount}
          />
          <Select
            size="medium"
            variant="outlined"
            value={String(entries[0].measureId)}
            label="Unit"
            onChange={(event: SelectChangeEvent) => {
              const newValue = Number(event.target.value);

              if (typeof newValue == "number") {
                dispatch(
                  changeIngredientMeasure({
                    id: 0,
                    measureId: Number(event.target.value),
                  })
                );
              }
            }}
          >
            {measures.map((item) => {
              return (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
          <IconButton
            onClick={() => {
              console.log(entries);
            }}
          >
            <DeleteIcon sx={{ color: "#70CBFF" }} />
          </IconButton>
        </div>
      </div>
    </CreationCard>
  );
};
