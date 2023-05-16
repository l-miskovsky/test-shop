import React from "react";
import CartBadge from "../components/CartBadge";

interface GenericLayoutProps {
  title: string;
  children: React.ReactNode;
}
/**
 * NOTE: paddings, font-weight, font-size, icons etc. may not be a proper match, just approximation. Design would supply correct values.
 * Also media queries are not implemented nor anything else not visible (and not needed for the functionality) on provided images (eg. hover visuals).
 */
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
