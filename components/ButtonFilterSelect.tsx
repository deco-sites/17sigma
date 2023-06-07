import { JSX } from "preact";

export function ButtonFilterSelect(
  { title, onClick, ...props }: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      role="option"
      className="block max-w-full text-left mb-2"
      title={title}
      onClick={onClick}
      {...props}
      >
      <span className="hover:border-b-landing-primary hover:border-b-[1px]">
        {title}
      </span>
    </button>
  );
}
