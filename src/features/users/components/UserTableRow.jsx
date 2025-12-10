import { HiPencil, HiTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';

import ConfirmDelete from '../../../components/ui/ConfirmDelete.jsx';
import Modal from '../../../components/ui/Modal.jsx';
import Table from '../../../components/ui/Table.jsx';
import { useDeleteUser } from '../api/useDeleteUser.js';
import UserType from '../UserType.jsx';

import UserCreationForm from './UserCreationForm.jsx';

const IDField = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const NameFiled = styled.div`
  font-family: 'Sono', serif;
  font-weight: 600;
`;

const EmailField = styled.div`
  font-family: 'Sono', serif;
  font-weight: 500;
  color: var(--color-green-700);
`;

const Placeholder = styled.div`
  font-family: 'Sono', serif;
  font-weight: 600;
`;

function UserTableRow({ user }) {
  const { isDeleting, deleteUser } = useDeleteUser();
  const { id, name, email } = user;

  return (
    <Table.Row>
      <IDField>{id}</IDField>
      <NameFiled>{name}</NameFiled>
      <EmailField>{email}</EmailField>
      <div>
        <Modal>
          <Modal.Open opens={'edit-user-form'}>
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name={'edit-user-form'}>
            <UserCreationForm userToEdit={user} />
          </Modal.Window>
          <Modal.Open opens={'delete-user-form'}>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name={'delete-user-form'}>
            <ConfirmDelete
              resourceName={'user'}
              onConfirm={() => deleteUser(id)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </div>
      <Placeholder>placeHolder</Placeholder>
    </Table.Row>
  );
}

UserTableRow.propTypes = {
  UserType,
}.isRequired;

export default UserTableRow;
