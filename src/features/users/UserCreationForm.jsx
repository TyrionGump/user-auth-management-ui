import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '../../ui/Button.jsx';
import Form from '../../ui/Form.jsx';
import FormRow from '../../ui/FormRow.jsx';
import Input from '../../ui/Input.jsx';

import { useCreateUser } from './useCreateUser.js';
import { useUpdateUser } from './useUpdateUser.js';

function UserCreationForm({ userToEdit = {} }) {
  const { isCreating, createUser } = useCreateUser();
  const { isUpdating, updateUser } = useUpdateUser();

  const { id: editId, ...editValues } = userToEdit;
  const isEditSession = editId !== undefined;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      updateUser({ newUserData: data, id: editId }, { onSuccess: (data) => reset({ ...data }) });
    } else {
      createUser(data, { onSuccess: () => reset() });
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={'Name'} error={errors?.name?.message}>
        <Input
          type={'text'}
          id="name"
          disabled={isCreating || isUpdating}
          defaultValue={'andrew123'}
          {...register('name', { required: 'Name is required' })}
        />
      </FormRow>
      <FormRow label={'Email'} error={errors?.email?.message}>
        <Input
          type={'text'}
          id="email"
          disabled={isCreating || isUpdating}
          defaultValue={'andrew123@test.com'}
          {...register('email', {
            required: 'Email is required',
            validate: (value) => value.includes('@') || 'Email must contain @',
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation={'secondary'} type={'reset'}>
          Cancel
        </Button>
        <Button disabled={isCreating}>Add User</Button>
      </FormRow>
    </Form>
  );
}

UserCreationForm.propTypes = {
  userToEdit: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserCreationForm;
