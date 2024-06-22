import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <h1 className="mt-11 mb-8 text-3xl font-semibold"> Payment pages</h1>
      {children}
    </div>
  );
};

export default Layout;
