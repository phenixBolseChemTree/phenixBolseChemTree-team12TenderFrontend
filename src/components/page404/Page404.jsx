import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>упс ничеге не найдено</h2>
      <button onClick={() => navigate('/', { replace: false })}>вернуться на главную</button>
    </div>
  );
};

export default Page404;
