import { useState } from 'react';

import UserCreationForm from '../features/users/UserCreationForm.jsx';
import UserTable from '../features/users/UserTable.jsx';
import Button from '../ui/Button.jsx';
import Heading from '../ui/Heading.jsx';
import Row from '../ui/Row.jsx';

function Users() {
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  return (
    <>
      <Row type={'horizontal'}>
        <Heading as={'h1'}>Users</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type={'vertical'}>
        <UserTable />
      </Row>
      <Button onClick={() => setIsCreatingNew((prev) => !prev)}>Add new User</Button>
      {isCreatingNew && <UserCreationForm />}
    </>
  );
}

export default Users;
