import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./../utilities/modalWindow.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  IngredientPayload,
  createIngredient,
  fetchIngredients,
} from "../store/ingredientsSlice";
import { createError, createSuccessMessage } from "../store/snackbarSlice";

type NumberInput = number | "";

interface CreateIngredientProps {
  children?: React.ReactElement;
}

const CreateIngredient: React.FC<CreateIngredientProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [calories, setCalories] = useState<NumberInput>("");
  const [proteins, setProteins] = useState<NumberInput>("");
  const [fats, setFats] = useState<NumberInput>("");
  const [carbohydrates, setCarbohydrates] = useState<NumberInput>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const resetCreation = () => {       // create reset button
  //   setName("");
  //   setCalories("");
  //   setProteins("");
  //   setFats("");
  //   setCarbohydrates("");
  // };

  const handleNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<NumberInput>>
  ) => {
    const value = event.target.value;
    if (value == "") {
      setCalories("");
    }
    if (!Number(value) || value.length > 3) {
      return;
    }
    setState(Number(value));
  };

  async function handleCreateIngredient(event: React.SyntheticEvent) {
    event.preventDefault();
    if (name && calories && proteins && fats && carbohydrates) {
      const payload: IngredientPayload = {
        name,
        calories,
        proteins,
        fats,
        carbohydrates,
        files: [],
      };
      await dispatch(createIngredient(payload))
        .unwrap()
        .then((res) => {
          dispatch(createSuccessMessage(res));
        })
        .catch((error) => {
          if (error?.name == "AxiosError") {
            dispatch(createError(error?.message));
          }
        })
        .finally(() => {
          setOpen(false);
          dispatch(fetchIngredients());
        });
    }
  }

  return (
    <div className="mt-[50px]">
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalWindow w-[200px]">
          <form autoComplete="false" onSubmit={handleCreateIngredient}>
            <Card sx={{ width: 200, height: 400 }}>
              <CardMedia
                component="img"
                sx={{ aspectRatio: 4 / 3 }}
                image="./src/assets/placeholder-image.jpg"
              />
              <CardContent>
                <TextField
                  required
                  variant="standard"
                  placeholder="Name of ingredient"
                  value={name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                  }
                />
                <div className="mt-3 gap-y-1 flex flex-col items-start">
                  <div className="flex items-center">
                    <Typography>Calories: </Typography>
                    <TextField
                      required
                      variant="standard"
                      value={calories}
                      sx={{ ml: 1, width: 40 }}
                      placeholder="100"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleNumberInput(event, setCalories)
                      }
                    ></TextField>
                  </div>
                  <div className="flex items-center">
                    <Typography>Proteins:</Typography>
                    <TextField
                      required
                      placeholder="100"
                      variant="standard"
                      value={proteins}
                      sx={{ ml: 1, width: 40 }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleNumberInput(event, setProteins)
                      }
                    />
                  </div>
                  <div className="flex items-center">
                    <Typography>Fats:</Typography>
                    <TextField
                      required
                      placeholder="100"
                      variant="standard"
                      value={fats}
                      sx={{ ml: 1, width: 40 }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleNumberInput(event, setFats)
                      }
                    />
                  </div>
                  <div className="flex items-center">
                    <Typography>Carbohydrates:</Typography>
                    <TextField
                      required
                      placeholder="100"
                      variant="standard"
                      value={carbohydrates}
                      sx={{ ml: 1, width: 40 }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleNumberInput(event, setCarbohydrates)
                      }
                    />
                  </div>
                  <Button type="submit">Create ingredient</Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateIngredient;
