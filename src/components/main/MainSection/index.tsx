import { SectionLayout, Text } from "@/components";

export const MainSection: React.FC = () => {
  return (
    <>
      <SectionLayout
        title={
          <span>
            제 이름은{" "}
            <Text
              size={6}
              weight={900}
              color="linear-gradient(to right, #A871FD,#021AA6)"
            >
              박여준
            </Text>
            입니다
          </span>
        }
        subtitle="소통하며 생각하는 개발자"
      ></SectionLayout>
    </>
  );
};
