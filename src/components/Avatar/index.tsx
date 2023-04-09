import Image from "next/image";

export function Avatar() {
  return (
    <Image
      className='rounded-full'
      src='/51049058.jpeg'
      width={80}
      height={80}
      alt='image'
    />
  )
}