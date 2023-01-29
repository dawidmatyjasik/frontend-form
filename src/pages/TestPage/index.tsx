import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { ROUTES } from "../../../../common/routes";
import { apiRequest } from "../../hooks/useAxios";
import { ComponentEnum, personalEnum } from "../../../../common/enum";
import { schema } from "../../../../common/personal/schema";
import moment from "moment";
import FormInputMask from "../../components/Form/FormInputMask";
import ReactInputMask from "react-input-mask";
import { choice } from "../../../../common/mocks";

const GENDER = {
  1: "Mężczyzna",
  2: "Kobieta",
  3: "Inne",
};

const columns: GridColDef[] = [
  {
    field: personalEnum.last_name,
    headerName: "Imię",
    width: 150,
  },
  {
    field: "gender",
    headerName: "Płeć",
    width: 150,
    type: "singleSelect",
    valueFormatter: (params) => GENDER[params.value],
    valueOptions: [1, 2, 3],
  },
  {
    field: "date_of_birth",
    headerName: "Data urodzenia",
    width: 150,
    type: "date",
    valueFormatter: (params) => moment(params.value).format("DD/MM/YYYY"),
    valueSetter: (params) => {
      return { ...params.row, date_of_birth: moment(params.value).toDate() };
    },
  },
  {
    field: "mailing_zip_code",
    headerName: "Adres zamieszkania",
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => <h1>Test</h1>,
  },
];
const TestPage = () => {
  const [data, setData] = useState<GridRowsProp>([]);
  useEffect(() => {
    const handleGet = async () => {
      const { data } = await apiRequest("get", ROUTES.PERSONAL.GET_ALL);
      console.log(data);
      setData(data);
    };
    handleGet();
  }, []);

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

  return (
    <Grid
      container
      spacing={3}
      style={{
        height: "calc(100vh - 64px)",
        width: "100%",
        display: "flex",
        padding: 20,
      }}
    >
      <Grid item xs={12} style={{ flexGrow: 1 }}>
        <DataGrid rows={data} columns={cols} getRowId={(row: any) => row._id} />
      </Grid>
    </Grid>
  );
};

export default TestPage;
