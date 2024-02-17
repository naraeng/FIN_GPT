import { useRouter } from "next/router";
import HeaderUI from "./Header_presenter";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
