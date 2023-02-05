import Actions from "../components/Table/Actions";

/* export const tableActions = () => {
  return {
    field: "actions",
    headerName: "Operacje",
    type: "actions",
    renderCell: (params) => <Actions {...{ params }} />,
  };
}; */

export const tableActions = {
  field: "actions",
  headerName: "Operacje",
  type: "actions",
  renderCell: (params) => <Actions {...{ params }} />,
};
