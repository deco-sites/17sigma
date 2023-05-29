import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface TeamsComponentProps {
  name: string;
  office?: string;
  imageUrl: string;
  linkedinIn?: string;
  twitter?: string;
  small?: boolean;
}

export default function TeamsComponent(
  { name, office, imageUrl, linkedinIn, twitter, small }: TeamsComponentProps,
) {
  return (
    <div>
      <picture className="block relative group before:absolute before:bg-landing-primary before:inset-0 before:opacity-0 before:z-[1] hover:before:opacity-60">
        <img src={imageUrl} alt={name} />
        <div className="absolute inset-0 z-[1]">
          <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 flex items-center gap-2">
            {linkedinIn && (
              <a href={linkedinIn} target="_blank" className="text-white">
                <FaLinkedinIn size={small ? 24 : 32} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" className="text-white">
                <FaTwitter size={small ? 24 : 32} />
              </a>
            )}
          </div>
        </div>
      </picture>
      <div className="mt-4">
        <h6 className="text-[1.31rem] font-bold text-white mb-1">{name}</h6>
        <p className="font-medium text-white text-[0.9rem]">{office}</p>
      </div>
    </div>
  );
}
