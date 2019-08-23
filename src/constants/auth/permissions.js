import { USERS_PAGE, SKILLS_PAGE, HOME_PAGE, LOGIN_PAGE } from 'constants/routes';
import { ADMIN_ROLE, GUEST_ROLE, USER_ROLE } from 'constants/auth/role';

const guestPermissions = [
  HOME_PAGE,
  USERS_PAGE,
  SKILLS_PAGE,
  LOGIN_PAGE
];

const userPermissions = [
  ...guestPermissions,
].filter((el) => [
  LOGIN_PAGE
].indexOf(el));


const adminPermissions = [
  ...userPermissions,
].filter((el) => [
  LOGIN_PAGE
].indexOf(el));


export const rolePermissions = [
  {
    'role': GUEST_ROLE,
    'page': guestPermissions
  },
  {
    'role': USER_ROLE,
    'page': userPermissions
  },
  {
    'role': ADMIN_ROLE,
    'page': adminPermissions
  }
];