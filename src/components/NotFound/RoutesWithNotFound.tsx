import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

interface PropsRoutesWithNotFound {
  children: React.ReactNode;
}

const RoutesWithNotFound = ({ children }: PropsRoutesWithNotFound) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default RoutesWithNotFound;
