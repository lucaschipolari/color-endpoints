import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getColorsFn, deleteColorFn } from "../api/colorCalls";
import ColorList from "./ColorList";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useColor } from "../stores/useColor";

const ColorManager = () => {
  const queryClient = useQueryClient();
  const { setColorToEdit } = useColor();

  const {
    data: colors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["colors"],
    queryFn: getColorsFn,
  });

  const { mutate: deleteColor } = useMutation({
    mutationFn: deleteColorFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Color deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
    onError: (err) => console.error("Error deleting color:", err),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteColor(id);
        toast.info("Deleting color...");
        Swal.fire("Deleted!", "Your color has been deleted.", "success");
      }
    });
  };

  const handleEdit = (color) => {
    setColorToEdit(color);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching colors</div>;

  return (
    <ColorList
      color={colors.data}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );
};

export default ColorManager;
