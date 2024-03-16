import { useSearchParams } from "react-router-dom";

const Welcome = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  return <h1>Welcome id = {id}</h1>;
};

export default Welcome;
