import React from "react";
import CartBadge from "../components/CartBadge";

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
      <header className="relative sticky top-0 bg-white">
        <h1 className="py-16 text-center text-3xl font-bold">{title}</h1>
        <div className="fixed right-10 top-16">
          <CartBadge />
        </div>
      </header>
      <main className="flex flex-col items-center px-20">{children}</main>
    </>
  );
};

export default GenericLayout;
