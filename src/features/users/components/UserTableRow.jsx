import { HiPencil, HiTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';

import ConfirmDelete from '../../../components/ui/ConfirmDelete.jsx';
import Menus from '../../../components/ui/Menus.jsx';
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
          <Menus.Menu>
            <Menus.Toggle id={user.id} />
            <Menus.List id={user.id}>
              <Modal.Open opens={'edit-user-form'}>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens={'delete-user-form'}>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name={'edit-user-form'}>
              <UserCreationForm userToEdit={user} />
            </Modal.Window>

            <Modal.Window name={'delete-user-form'}>
              <ConfirmDelete
                resourceName={'user'}
                onConfirm={() => deleteUser(id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

UserTableRow.propTypes = {
  UserType,
}.isRequired;

export default UserTableRow;
