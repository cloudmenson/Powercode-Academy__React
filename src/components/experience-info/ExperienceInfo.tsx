import * as Styles from "./styles";
import { IExperienceInfo } from "./types";

const ExperienceInfo = ({
  top,
  alt,
  src,
  text,
  children,
  uppercase,
}: IExperienceInfo) => {
  return (
    <Styles.Wrapper top={top}>
      <Styles.ImgWrapper>
        <Styles.Img src={src} alt={alt} />
      </Styles.ImgWrapper>

      <Styles.TextWrapper>
        <Styles.Title uppercase={uppercase}>{children}</Styles.Title>
        <Styles.Text>{text}</Styles.Text>
      </Styles.TextWrapper>
    </Styles.Wrapper>
  );
};

export { ExperienceInfo };
