import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUser as updateUserAPI } from '../../services/apiUsers.js';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: ({ newUserData, id }) => updateUserAPI(newUserData, id),
    onSuccess: () => {
      toast.success('User updated successfully.');
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => console.error(err),
  });

  return { isUpdating, updateUser };
};
