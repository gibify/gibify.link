import { useRouter } from 'next/router';
import { Links } from '@/components/Links';
import { Infos } from '@/components/Infos';
import { Avatar } from '@/components/Avatar';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main
      className='w-full min-h-screen bg-white flex flex-col items-center justify-start p-4'
    >
      <Avatar />
      <Infos username={slug} descriptions='Developer' />
      <Links />
    </main>
  );
};

export default Slug;