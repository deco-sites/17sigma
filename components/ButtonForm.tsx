interface ButtonFormProps {
  active: boolean
}

export default function ButtonForm({active}: ButtonFormProps) {
  return (
    <a href='#contactopen' className={`fixed flex items-center text-center w-28 h-28 rounded-full bg-landing-primary text-white right-8 bottom-8 z-50 font-bold ${active ? 'hidden' : ''}`}>
      GET IN TOUCH
    </a>
  );
}
