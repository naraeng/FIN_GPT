import {
  Contents,
  InputWrapper,
  Label,
  Nickname,
  Password,
  Subject,
  Title,
  Wrapper,
  WriterWrapper,
} from "./BoardWrite.styles";

export default function BoardWriteUI() {
  return (
    <>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>닉네임</Label>
            <Nickname type="text" placeholder="닉네임을 입력해주세요." />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 입력해주세요." />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 입력해주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 입력해주세요." />
        </InputWrapper>
      </Wrapper>
    </>
  );
}
