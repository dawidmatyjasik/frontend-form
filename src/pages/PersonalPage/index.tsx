import { useEffect, useState } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { ROUTES } from "../../../../common/routes";
import { apiRequest } from "../../hooks/useAxios";
import { ComponentEnum, personalEnum } from "../../../../common/enum";
import { schema } from "../../../../common/personal/schema";
import moment from "moment";
import { choice } from "../../../../common/mocks";
import { Toolbar } from "../../components/Table/Toolbar";
import Modal from "../../components/Table/Modal";
import Wrapper from "../../components/Table/Wrapper";
import Actions from "../../components/Table/Actions";
import { Content } from "./Content";

export const PersonalPage = () => {
  const [data, setData] = useState<GridRowsProp>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleGet = async () => {
      const { data } = await apiRequest("get", ROUTES.PERSONAL.GET_ALL);
      console.log(data);
      setData(data);
    };
    handleGet();
  }, []);

  const actions = {
    field: "actions",
    headerName: "Operacje",
    type: "actions",
    renderCell: (params: any) => <Actions {...{ params }} />,
  };

  const filteredSchema = schema.filter((el) => !!el.name);

  const cols: any = filteredSchema.map((col, i) => {
    let props: any;
    if (col.options) {
      props = {
        valueFormatter: (params: GridValueFormatterParams) =>
          col.options[params.value],
      };
    }

    if (col.component === ComponentEnum.FormSwitch) {
      props = {
        valueFormatter: (params: GridValueFormatterParams) =>
          choice[params.value],
      };
    }

    if (col.component === ComponentEnum.FormDatePicker) {
      props = {
        valueFormatter: (params: GridValueFormatterParams) =>
          moment(params.value).format("DD/MM/YYYY"),
      };
    }

    return {
      key: i,
      field: col.name,
      headerName: col.label,
      width: 150,
      ...props,
    };
  });

  const colsWithActions = cols.concat(actions);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            toolbar: { handleOpen },
          }}
          localeText={{ toolbarDensity: "Gęstość" }}
        />
      </Grid>
      <Modal open={open} handleClose={handleClose}>
        <Content />
      </Modal>
    </Wrapper>
  );
};
