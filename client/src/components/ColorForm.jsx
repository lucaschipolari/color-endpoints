import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ColorPicker from "./ColorPicker";
import { postColorFn, putColorFn } from "../api/colorCalls";
import { useColor } from "../stores/useColor";
import Input from "../ui/Input";

const ColorForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
    setValue,
  } = useForm();
  const queryClient = useQueryClient();

  const { mutate: postColor } = useMutation({
    mutationFn: postColorFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Color added successfully!");
      reset();
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(`Error adding color: ${e.message}`);
    },
  });

  const { mutate: putColor } = useMutation({
    mutationFn: putColorFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Color updated successfully!");
      reset();
      clearColorToEdit();
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(`Error updating color: ${e.message}`);
    },
  });

  const { colorToEdit, clearColorToEdit } = useColor();

  useEffect(() => {
    if (colorToEdit) {
      setValue("color", colorToEdit.name);
      setColor(colorToEdit.hexCode);
    }
  }, [colorToEdit, setValue]);

  const [color, setColor] = useState("#000000");

  const handleSubmit = (data) => {
    toast.loading("Saving the color");
    const colorData = {
      name: data.color,
      hexCode: color,
    };

    if (colorToEdit) {
      console.log(colorToEdit);
      putColor({ idColor: colorToEdit.id, data: colorData });
    } else {
      postColor(colorData);
    }
  };

  const handleCancelEdit = () => {
    clearColorToEdit();
    reset();
  };

  return (
    <div className="container">
      <form className="card py-3" onSubmit={onSubmitRHF(handleSubmit)}>
        <h2 className="ps-3 pb-3">Administrar colores</h2>
        <div className="bg-dark py-3 container d-flex justify-content-center align-items-center gap-3">
          <ColorPicker color={color} setColor={setColor} />
          <div className="bg-light rounded px-3 py-2 h-100">
            <p className="mb-0">{color}</p>
          </div>
        </div>
        <Input
          className="my-2"
          name="color"
          label="Color"
          register={register}
          error={errors.color}
          options={{
            required: {
              value: true,
              message: "Color is required",
            },
          }}
        />
        {colorToEdit && (
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancelar edición
            </button>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
