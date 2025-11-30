import Heading from '../components/ui/Heading.jsx';
import Row from '../components/ui/Row.jsx';
import AddUser from '../features/users/components/AddUser.jsx';
import UserTable from '../features/users/components/UserTable.jsx';

function Users() {
  return (
    <>
      <Row type={'horizontal'}>
        <Heading as={'h1'}>Users</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type={'vertical'}>
        <UserTable />
      </Row>

      <AddUser />
    </>
  );
}

export default Users;
