import css from './Notification.module.css';
import { NotificationProps } from './Notification.types';

const Notification: React.FC<NotificationProps> = ({ children }) => {
  return <div className={css.notification}>{children}</div>;
};
export default Notification;
