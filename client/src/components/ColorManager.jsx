import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getColorsFn, deleteColorFn } from "../api/colorCalls";
import ColorList from "./ColorList";

const ColorManager = () => {
  const queryClient = useQueryClient();

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
      console.log("Color deleted successfully");

      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
    onError: (err) => console.error("Error deleting color:", err),
  });

  const handleDelete = (id) => {
    console.log(id);
    deleteColor(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching colors</div>;

  return <ColorList color={colors.data} onDelete={handleDelete} />;
};

export default ColorManager;
