import { useQuery } from '@tanstack/react-query';

import { getAllUsers } from '../../services/apiUsers.js';

export function useUsers() {
  const { isLoading, data: users, error } = useQuery({ queryKey: ['users'], queryFn: getAllUsers });
  return { isLoading, users, error };
}
