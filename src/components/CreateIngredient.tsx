import * as React from "react";
import { useState } from "react";
import axios from "../api/axios";
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

const CREATE_INGREDIENT_URL = "/ingridients";

type NumberInput = number | "";

interface CreateIngredientProps {
  children: React.ReactElement;
}

const CreateIngredient: React.FC<CreateIngredientProps> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [name, setName] = useState<string>();
  const [calories, setCalories] = useState<NumberInput>("");
  const [proteins, setProteins] = useState<NumberInput>("");
  const [fats, setFats] = useState<NumberInput>("");
  const [carbohydrates, setCarbohydrates] = useState<NumberInput>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const resetCreation = () => {
    setName("");
    setCalories("");
    setProteins("");
    setFats("");
    setCarbohydrates("");
  };

  const handleNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<NumberInput>>
  ) => {
    const value = event.target.value;
    if (value == "") {
      setCalories("");
    }
    if (!Number(value) || value.length > 3) {
      console.log("return");
      return;
    }
    setState(Number(value));
  };

  async function createIngredient(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    const payload = {
      name,
      calories,
      proteins,
      fats,
      carbohydrates,
      files: [],
    };
    await axios.post(CREATE_INGREDIENT_URL, payload);
    resetCreation();
    handleClose();
  }

  return (
    <div className="mt-[50px]">
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalWindow w-[200px]">
          <form autoComplete="false" onSubmit={createIngredient}>
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
