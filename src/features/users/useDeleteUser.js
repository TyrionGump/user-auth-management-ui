import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteUser as deleteUserAPI } from '../../services/apiUsers.js';

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserAPI,
    onSuccess: () => {
      toast.success('User deleted successfully.');
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteUser };
}
