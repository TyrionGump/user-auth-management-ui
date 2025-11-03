import PropTypes from 'prop-types';

const UserType = PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export default UserType;
