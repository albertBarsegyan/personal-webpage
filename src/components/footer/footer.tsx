import { LogoIcon } from '@/icons/logo.icon';
// import { PhoneIcon } from '@/icons/phone-icon';
// import { WhatsappIcon } from '@/icons/whatsapp-icon';
// import { TelegramIcon } from '@/icons/telegram-icon';
import { LinkedinIcon } from '@/icons/linkedin-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20 md:mt-20'>

      <div className='flex flex-col bg-primary p-5 md:p-10 rounded-3xl gap-x-4'>
        <div className='flex items-center justify-center'>
          <div className='max-w-2xl flex flex-col justify-center items-center gap-y-4'>
            <button type='button' className='button-reset text-secondary flex-one-line'>
              <LogoIcon color='white' size={80}/>
            </button>
            <div>
              <p className='text-lg md:text-xl text-center font-bold'>Let{'\''}s build a friendly and collaborative
                atmosphere
                together, where we all strive for excellence in software development!</p>
            </div>
            <div className='flex flex-row gap-x-4'>
              <a href="https://www.linkedin.com/in/albertbarsegyan/" target='_blank'>
                <LinkedinIcon size={36}/>
              </a>

            </div>
          </div>

        </div>
      </div>
      <p className='text-center text-base md:text-lg  mt-2 md:mt-4'>{currentYear} © YACKO - ALL RIGHTS RESERVED </p>
    </div>
  );
}
