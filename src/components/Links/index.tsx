import Link from "next/link";
import * as Icons from "react-icons/fa";
import { LinksProps } from '@/types/links';

const links: LinksProps[] = [
  { name: 'instagram', url: '#', icon: 'FaInstagram', color: '#d62976' },
  { name: 'Facebook', url: '#', icon: 'FaFacebook', color: '#3b5998' },
  { name: 'Whatsapp', url: '#', icon: 'FaWhatsapp', color: '#075E54' },
  { name: 'TikTok', url: '#', icon: 'FaTiktok', color: '#000000' },
  { name: 'Youtube', url: '#', icon: 'FaYoutube', color: '#FF0000' },
  { name: 'Telegram', url: '#', icon: 'FaTelegram', color: '#0088cc' },
  { name: 'Linkedin', url: '#', icon: 'FaLinkedin', color: '#0072b1' },
  { name: 'Twitter', url: '#', icon: 'FaTwitter', color: '#0072b1' },
]

export function Links() {
  function isIconName(name: string): name is keyof typeof Icons {
    return name in Icons;
  }

  return (
    <div className="flex flex-col mt-8 w-60">
      {links.map((link, index) => {
        if (isIconName(link.icon))
        {
          const Icon = Icons[link.icon];
          return (
            <Link
              key={index}
              href={link.url}
              className="w-full flex items-center justify-center border-2 rounded-full px-10 py-2 mb-4"
              style={{ backgroundColor: `${link.color}` }}
            >
              <Icon size={28} color='white' className="mr-4" />
              <span className="text-md text-left font-semibold uppercase">{link.name}</span>
            </Link>
          )
        }
        return null
      })}
    </div>
  )
}
