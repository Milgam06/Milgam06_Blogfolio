import { SectionLayout } from "@/components";

export const MainSection: React.FC = () => {
  return (
    <>
      <SectionLayout
        title={
          <span>
            제 이름은 <span style={{ color: "red" }}>박여준</span>입니다.
          </span>
        }
        subtitle="소통하며 생각하는 개발자"
      ></SectionLayout>
    </>
  );
};
