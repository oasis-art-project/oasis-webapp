import {
  HiOutlineCheck,
  HiOutlineExclamation,
  HiOutlineExclamationCircle,
  HiOutlineFire,
} from 'react-icons/hi';

interface AlertProps {
  appearance: string;
  children: any;
  onDismiss: any;
}

const Alert = (props: AlertProps) => {
  const { appearance, children, onDismiss } = props;
  const color =
    appearance === 'error'
      ? 'red'
      : appearance === 'success'
      ? 'brandGray'
      : appearance === 'warning'
      ? 'yellow'
      : 'blue';

  const Icon =
    appearance === 'error'
      ? HiOutlineFire
      : appearance === 'success'
      ? HiOutlineCheck
      : appearance === 'warning'
      ? HiOutlineExclamationCircle
      : HiOutlineExclamation;

  return (
    <div className={'text-white px-6 py-4 border-0 rounded relative mb-4 bg-' + color + '-400'}>
      <span className="text-xl inline-block mr-5 align-middle">
        <Icon />
      </span>
      <span className="inline-block align-middle mr-8">{children}</span>
      <button
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        onClick={() => onDismiss()}
      >
        <span>×</span>
      </button>
    </div>
  );
};
export default Alert;
