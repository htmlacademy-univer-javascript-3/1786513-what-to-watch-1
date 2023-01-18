import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutAction } from '../../store/api-actions';
import {
  getAuthorizationStatus,
  getUser,
} from '../../store/user-process/selectors';

function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div
              className="user-block__avatar"
              onClick={() => navigate(AppRoute.MyList)}
            >
              <img
                src={user?.avatarUrl ?? 'img/avatar.jpg'}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.Root}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <Link to={AppRoute.Login} className="user-block__link">
          Sign in
        </Link>
      )}
    </ul>
  );
}

export default UserBlock;
