import type { ComponentChildren } from "preact";

type ContainerProps = {
  children?: ComponentChildren;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full mr-auto ml-auto pl-4 pr-4 xxl:max-w-[1320px] xl:max-w-[1140px]">
      {children}
    </div>
  );
}
