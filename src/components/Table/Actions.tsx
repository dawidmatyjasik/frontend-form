import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Delete, Edit, Preview } from "@mui/icons-material";
import Modal from "./Modal";
import { Content } from "../../pages/PersonalPage/Content";
import { useDeletePersonalMutation } from "../../store/api/personal";

const Actions = ({ params: { row } }) => {
  const [editModal, setEditModal] = useState(false);

  const [deletePersonal] = useDeletePersonalMutation();
  const [updatePersonal] = useDeletePersonalMutation();

  const handleEdit = (values) => {
    console.log(values);
    // updatePersonal(values)
    setEditModal(false);
  };

  return (
    <>
      <Box>
        <Tooltip title="Edytuj" onClick={() => setEditModal(true)}>
          <IconButton>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Usuń" onClick={() => deletePersonal(row._id)}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
      <Modal open={editModal} setOpen={setEditModal}>
        <Content onSubmit={handleEdit} id={row._id} />
      </Modal>
    </>
  );
};

export default Actions;
