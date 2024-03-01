import React from "react";

type Props = {
  children: React.ReactNode;
};

const AfterLoginLayout = ({ children }: Props) => {
  return (
    <div>
      AfterLoginLayout
      {children}
    </div>
  );
};

export default AfterLoginLayout;
