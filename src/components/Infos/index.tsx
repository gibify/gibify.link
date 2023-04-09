
type InfosProps = {
  username: string | string[] | undefined;
  descriptions: string;
}

export function Infos({ username, descriptions }: InfosProps) {
  return (
    <div className="flex flex-col items-center mt-4 w-56">
      <h2 className='text-black text-2xl'>{username}</h2>
      <p className='text-black text-md'>{descriptions}</p>
    </div>
  )
}