import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createUser as createUserAPI } from '../../services/apiUsers.js';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createUser } = useMutation({
    mutationFn: createUserAPI,
    onSuccess: () => {
      toast.success('User created successfully.');
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => console.error(err),
  });

  return { isCreating, createUser };
}
