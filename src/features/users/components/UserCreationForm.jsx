import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '../../../components/ui/Button.jsx';
import Form from '../../../components/ui/Form.jsx';
import FormRow from '../../../components/ui/FormRow.jsx';
import Input from '../../../components/ui/Input.jsx';
import { useCreateUser } from '../api/useCreateUser.js';
import { useUpdateUser } from '../api/useUpdateUser.js';

// eslint-disable-next-line react/prop-types
function UserCreationForm({ userToEdit = {}, onCloseModal }) {
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
      updateUser(
        { newUserData: data, id: editId },
        {
          onSuccess: (data) => {
            reset({ ...data });
            onCloseModal?.();
          },
        },
      );
    } else {
      createUser(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal ? 'modal' : 'regular'}>
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
        <Button variation={'secondary'} type={'reset'} onClick={() => onCloseModal?.()}>
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
