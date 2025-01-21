import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DashButton({
  title,
  loading = false,
  disabled = false,
  button = 'submit',
  deleteBtn,
  onClick,
}: {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  button?: 'submit' | 'button' | 'reset';
  deleteBtn?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button
      disabled={disabled}
      type={button}
      onClick={onClick}
      className={`${
        deleteBtn ? 'bg-red-600 hover:bg-red-800 w-full' : 'bg-green-600 hover:bg-green-800 w-full'
      }`}
    >
      {loading && <Loader2 className='animate-spin' />}
      {title}
    </Button>
  );
}
