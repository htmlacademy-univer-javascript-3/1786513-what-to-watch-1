import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutAction } from '../../store/api-actions';

function UserBlock() {
  const { authorizationStatus, user } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
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