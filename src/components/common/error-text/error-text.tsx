import classNames from 'classnames';

export function ErrorText({ errorMessage }:{errorMessage: string}) {
  return (
    <p
      className={classNames('bg-white text-red-500 h-0 duration-75 mt-2 rounded-3xl', { ['h-auto px-4 py-2']: Boolean(errorMessage) })}>{errorMessage}</p>
  );
};
