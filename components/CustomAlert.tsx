import React, { FC, useEffect } from "react";

interface IProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: FC<IProps> = ({ message, onClose }: IProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="slide-in fixed left-1/3 top-0 transform rounded-lg bg-blue px-4 py-2 text-white shadow-lg">
      {message}
    </div>
  );
};

export default CustomAlert;
