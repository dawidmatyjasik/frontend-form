import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { Delete, Edit, Preview } from "@mui/icons-material";
import Modal from "./Modal";
import { Content } from "../../pages/PersonalPage/Content";
import { toast } from "react-toastify";
import {
  useDeletePersonalMutation,
  useUpdatePersonalMutation,
} from "../../store/api/personal";

const Actions = ({ params }) => {
  const [editModal, setEditModal] = useState(false);

  const [deletePersonal] = useDeletePersonalMutation();
  const [updatePersonal] = useUpdatePersonalMutation();

  const handleEdit = (values) => {
    console.log(values);
    updatePersonal({ id: params.id, values });
    setEditModal(false);
    toast.success("Zaktualizowano!");
  };

  const handleDelete = () => {
    deletePersonal(params.row._id);
    toast.success("Usunięto!");
  };

  return (
    <>
      <Box>
        <Tooltip title="Edytuj" onClick={() => setEditModal(true)}>
          <IconButton>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Usuń" onClick={handleDelete}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
      <Modal open={editModal} setOpen={setEditModal}>
        <Content onSubmit={handleEdit} id={params.row._id} />
      </Modal>
    </>
  );
};

export default Actions;
