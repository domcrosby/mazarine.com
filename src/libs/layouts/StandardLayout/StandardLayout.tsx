import { Container, Flex, Grow } from "../../components";

interface StandardLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

export const StandardLayout = ({
  children,
  header,
  footer,
}: StandardLayoutProps) => (
  <Flex column full>
    {header}
    <Grow>
      <Container>{children}</Container>
    </Grow>
    {footer}
  </Flex>
);
