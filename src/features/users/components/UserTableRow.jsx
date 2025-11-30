import { HiPencil, HiTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';

import ConfirmDelete from '../../../components/ui/ConfirmDelete.jsx';
import Modal from '../../../components/ui/Modal.jsx';
import { useDeleteUser } from '../api/useDeleteUser.js';
import UserType from '../UserType.jsx';

import UserCreationForm from './UserCreationForm.jsx';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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
    <>
      <TableRow role={'row'}>
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
      </TableRow>
    </>
  );
}

UserTableRow.propTypes = {
  UserType,
}.isRequired;

export default UserTableRow;
