import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const BeforeLoginLayout = ({ children, modal }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default BeforeLoginLayout;

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
