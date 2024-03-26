import { IconsType } from '@/types/icons-type';

export function CloseIcon({ size = 96,color,className }: IconsType) {
  return (
    <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
        fill=""/>
      <path
        d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
        fill=""/>
    </svg>
  );
};
