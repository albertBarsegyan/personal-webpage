import Image from 'next/image';

interface CardProps {
  imageWidth?: number;
  data: {
    title: string;
    description: string;
    imageSrc:string;
    imageAlt: string;
  }
}

export function Card({ data, imageWidth }:CardProps) {
  return (
    <div className="p-5 rounded-3xl bg-primary flex justify-center flex-col py-10">
      <div className='mx-auto w-full relative max-w-48 h-48'>
        <Image className='w-full h-full top-0 left-0 object-cover rounded-full' fill width={imageWidth} src={data.imageSrc} alt={data.imageAlt}/>
      </div>

      <div className='mt-4 flex flex-col justify-center items-center'>

        <p className='text-center w-fit'>{data.title}</p>

        <p className='mt-5 text-xs'>
          {data.description}
        </p>

      </div>
    </div>
  );
};
