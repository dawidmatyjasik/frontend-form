import { CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress size={100} />
    </div>
  );
};

export default LoadingScreen;
