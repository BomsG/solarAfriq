import { useCallback, useEffect, useState } from 'react';
import api from '../Auth/axios';
import { useAuthContext } from '../context/auth';
import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';

export default function useGetReq(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuthContext();
  // const router = useRouter();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // if (!token) {
      //   router.push('/login');
      //   throw new Error('User not logged in');
      // }
      const response = await api(url);

      if (response?.status === 400) {
        toast.error('Session expired. Redirecting to login...');
        // router.push('/login');

        return;
      }

      setData(response);
    } catch (err: any) {
      setError(err.message || 'Unable to fetch data');
    } finally {
      setIsLoading(false);
    }
  }, [url, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
