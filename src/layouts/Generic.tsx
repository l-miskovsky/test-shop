import React from "react";

interface GenericLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const GenericLayout: React.FC<GenericLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
};

export default GenericLayout;
