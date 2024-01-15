import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate()
  
  const [cookies] = useCookies(['authToken']);
  const authToken = cookies.authToken;
  
  if (!authToken) {
    navigate("/")
  }

  return authToken
}

export default useAuth;