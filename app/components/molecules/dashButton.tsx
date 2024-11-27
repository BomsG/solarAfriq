import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DashButton({
  title,
  loading = false,
  disabled = false,
}: {
  title: string;
  loading?: boolean;
  disabled?: boolean;
}) {
  return (
    <Button disabled={disabled} className='bg-green-600 hover:bg-green-800'>
      {loading && <Loader2 className='animate-spin' />}
      {title}
    </Button>
  );
}
