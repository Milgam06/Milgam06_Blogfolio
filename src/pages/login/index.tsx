import { Text } from "@/components";
import { useLogin } from "@/hooks";

export const LoginPage: React.FC = () => {
  const { handleWhoAmI } = useLogin();
  return (
    <>
      <Text
        size={3}
        weight={900}
        color="linear-gradient(to right, #cba8ff,#0e2ee2)"
      >
        혹시 박여준이십니까?
      </Text>
      <button onClick={handleWhoAmI}>로그인</button>
    </>
  );
};
