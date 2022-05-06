import cx from 'classnames';

type Props = React.ComponentProps<'input'>;
export const TextInput = ({className, ...rest}: Props) => {
  return (
    <>
      <input
        className={cx(
          'h-full bg-transparent max-w-full min-w-0 text-gray-900 px-3',
          className
        )}
        {...rest}
      />
    </>
  );
};
