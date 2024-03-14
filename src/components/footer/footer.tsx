import { LogoIcon } from '@/icons/logo.icon';
import { PhoneIcon } from '@/icons/phone-icon';
import { WhatsappIcon } from '@/icons/whatsapp-icon';
import { TelegramIcon } from '@/icons/telegram-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-40'>

      <div className='flex flex-col bg-primary p-10 rounded-3xl'>
        <div>
          <button type='button' className='button-reset text-secondary flex-one-line'>
            <LogoIcon size={80}/>
          </button>
        </div>
        <div className='mt-10 flex items-center gap-x-2'>
          <PhoneIcon size={24}/>
          +374 (94) 00-16-00
        </div>
        <div className='mt-2 flex items-center gap-x-2'>
          <WhatsappIcon size={24}/>
          +374 (94) 00-16-00
        </div>
        <div className='mt-2 flex items-center gap-x-2'>
          <TelegramIcon size={24}/>
          +374 (94) 00-16-00
        </div>
      </div>
      <p className='text-center text-lg'>{currentYear} © YACKO - ALL RIGHTS RESERVED </p>
    </div>
  );
}
