import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    
    <div className="flex w-full flex-col items-center text-2xl font-semibold">
      {children}
    </div>
  );
};

export default Layout;
