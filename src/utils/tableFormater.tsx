import { GridValueFormatterParams } from "@mui/x-data-grid";
import moment from "moment";
import { ComponentEnum } from "../../../common/enum";
import { choice } from "../../../common/mocks";
import Actions from "../components/Table/Actions";

const tableFormater = ({ schema }) => {
  const filteredSchema = schema.filter((el) => !!el.name);

  const actions = {
    field: "actions",
    headerName: "Operacje",
    type: "actions",
    renderCell: (params) => <Actions {...{ params }} />,
  };

  const cols = filteredSchema.map((col, i) => {
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

  return { colsWithActions, cols };
};

export default tableFormater;
