import { useQuery } from '@tanstack/react-query';

import Menus from '../../../components/ui/Menus.jsx';
import Spinner from '../../../components/ui/Spinner.jsx';
import Table from '../../../components/ui/Table.jsx';
import { getAllUsers } from '../../../services/apiUsers.js';

import UserTableRow from './UserTableRow.jsx';

function UserTable() {
  const { isLoading, data: users } = useQuery({ queryKey: ['users'], queryFn: getAllUsers });

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns={'0.6fr 2.8fr 3.2fr 1fr'}>
        <Table.Header role="row">
          <div>id</div>
          <div>name</div>
          <div>email</div>
        </Table.Header>
        <Table.Body data={users} render={(user) => <UserTableRow key={user.id} user={user} />} />
      </Table>
    </Menus>
  );
}

export default UserTable;
