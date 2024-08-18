import React from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  spaceBetween?: boolean;
  full?: boolean;
  center?: boolean;
  column?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({
  children,
  className,
  flex,
  spaceBetween,
  full,
  center,
  column,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        flex && styles.flex,
        spaceBetween && styles.spaceBetween,
        full && styles.full,
        center && styles.center,
        column && styles.column,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
