import Swal from "sweetalert2";

//Alert Delete
export const alertDelete = async (
  message = "Are you sure you want to delete this?"
) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "var(--bg)",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (result.isConfirmed) {
    await Swal.fire({
      title: "Deleted!",
      text: "Your item has been deleted.",
      icon: "success",
    });
    return true;
  }
  return false;
};

//Regular
export const showAlert = (message, type = "warning") => {
  Swal.fire({
    title: message,
    icon: type,
    confirmButtonText: "OK",
  });
};
