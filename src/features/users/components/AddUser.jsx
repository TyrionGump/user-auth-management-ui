import Button from '../../../components/ui/Button.jsx';
import Modal from '../../../components/ui/Modal.jsx';

import UserCreationForm from './UserCreationForm.jsx';

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens={'user-form'}>
          <Button>Add new user</Button>
        </Modal.Open>
        <Modal.Window name={'user-form'}>
          <UserCreationForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
