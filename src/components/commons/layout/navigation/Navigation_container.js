import { useRouter } from "next/router";
import NavigationUI from "./Navigation_presenter";

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event) => {
    void router.push(event.currentTarget.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
