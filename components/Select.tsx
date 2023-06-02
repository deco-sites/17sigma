
import { JSX } from "preact";

interface SelectProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  active?:boolean;
}

export function Select({ onClick, children, active }: SelectProps) 
{

  return (
    <button className={ ( !active ? 'border-[1px]' : '' ) + ' flex justify-between items-center min-w-fit w-[200px] pr-[1.875rem] pl-[1.875rem] h-[3.5625rem] rounded-full border-landing-primary '} onClick={onClick}>
     {children}
    </button>
  )
}
