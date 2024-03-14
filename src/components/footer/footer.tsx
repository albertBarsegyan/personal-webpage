export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-40'>

      <div>
        <div></div>
        <div></div>
      </div>
      <p className='text-center text-lg'>{currentYear} © YACKO - ALL RIGHTS RESERVED </p>
    </div>
  );
};
