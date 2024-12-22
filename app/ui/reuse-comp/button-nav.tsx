import React from "react";

interface ButtonNavProps {
  children: React.ReactNode;
  className?: string;
  // onClick: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const ButtonNav: React.FC<ButtonNavProps> = ({ children, className }) => {
  return (
    <div className="bg-blue-600 rounded-md p-2">
      <button className={`btn ${className}`}>{children}</button>
    </div>
  );
};

export default ButtonNav;
