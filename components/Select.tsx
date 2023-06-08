import { ComponentChild, ComponentChildren, JSX } from "preact";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface SelectProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  ariaLabelledby?: string;
  filterName: string;
}
export function Select(
  { onClick, children, active, label, ariaLabelledby, filterName }: SelectProps,
) {
  return (
    <div
      className="flex-1 min-w-fit md:w-[200px]"
      aria-labelledby={"select-" + label}
      aria-haspopup="listbox"
    >
      <button
        className={(!active ? "border-[1px]" : "") +
          " text-[1rem] flex justify-between items-center w-full pr-[1.875rem] pl-[1.875rem] h-[3.5625rem] rounded-full border-landing-primary "}
        onClick={onClick}
      >
        {label && label}{" "}
        {active ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
      </button>
      <div
        role="menu"
        aria-sort="ascending"
        aria-labelledby={"options-select-" + ariaLabelledby}
        data-filter={filterName}
        aria-expanded={active ? "true" : "false"}
        className={(active ? "block" : "hidden") +
          " pl-[1.875rem] pt-8 w-fit md:w-[185px] md:pt-16 text-white"}
      >
        {children}
      </div>
    </div>
  );
}
