import { useState } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';

import UserType from '../../type/UserType.jsx';

import { useDeleteUser } from './useDeleteUser.js';
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
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteUser } = useDeleteUser();
  const { id, name, email } = user;

  return (
    <>
      <TableRow role={'row'}>
        <IDField>{id}</IDField>
        <NameFiled>{name}</NameFiled>
        <EmailField>{email}</EmailField>
        <div>
          <button onClick={() => setShowForm((isShown) => !isShown)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteUser(id)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
        Delete
        <Placeholder>placeHolder</Placeholder>
      </TableRow>
      {showForm && <UserCreationForm userToEdit={user} />}
    </>
  );
}

UserTableRow.propTypes = {
  UserType,
}.isRequired;

export default UserTableRow;
