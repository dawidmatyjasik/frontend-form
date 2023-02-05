import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { schema } from "../../../../common/personal/schema";
import { Toolbar } from "../../components/Table/Toolbar";
import Modal from "../../components/Table/Modal";
import Wrapper from "../../components/Table/Wrapper";
import { Content } from "./Content";
import {
  useAddPersonalMutation,
  useGetAllPersonalQuery,
} from "../../store/api/personal";
import useTable from "../../hooks/useTable";
import { tableActions } from "../../utils/tableActions";

export const PersonalPage = () => {
  const { data = [], isLoading } = useGetAllPersonalQuery();
  const [addData] = useAddPersonalMutation();
  const [sendModal, setSendModal] = useState(false);

  const actions = tableActions;

  const { colsWithActions } = useTable({ schema, actions });

  const handleSubmit = async (values) => {
    await addData(values);
    setSendModal(false);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <Wrapper>
      <Grid item xs={12} style={{ flexGrow: 1 }}>
        <DataGrid
          rows={data}
          columns={colsWithActions}
          getRowId={(row: any) => row._id}
          components={{
            Toolbar: Toolbar,
          }}
          componentsProps={{
            toolbar: { setOpen: setSendModal },
          }}
          localeText={{ toolbarDensity: "Gęstość" }}
        />
      </Grid>
      <Modal open={sendModal} setOpen={setSendModal}>
        <Content onSubmit={handleSubmit} />
      </Modal>
    </Wrapper>
  );
};
