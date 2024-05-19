import { useContext } from "react";


const AuthContext = useContext(AuthProvider)


const AuthProvider = () => {

  return (
    <div>
      <h1>This is AuthProvider</h1>
    </div>
  );
};

export default AuthProvider;
