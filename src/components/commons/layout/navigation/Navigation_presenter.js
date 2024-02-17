import { Fragment } from "react";
import { MenuItem, Wrapper } from "./Navigation_styles";

const NAVIGATION_MENUS = [
  { name: "금융지식", page: "/info" },
  { name: "금융퀴즈", page: "/quiz" },
  { name: "금융뉴스", page: "/news" },
  { name: "자유게시판", page: "/boards" },
];

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
