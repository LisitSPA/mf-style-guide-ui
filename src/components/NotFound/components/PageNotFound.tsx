import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Esta página no existe.</h3>
      <button onClick={() => navigate('/')}>Volver a home</button>
    </>
  );
};
export default PageNotFound;
