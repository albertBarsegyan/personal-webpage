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
    <div className="p-5 rounded-3xl bg-blueberry-300 flex justify-center flex-col pt-10 pb-20 max-w-80">
      <div className='mx-auto w-full relative max-w-48 h-48'>
        <Image className='w-full h-full top-0 left-0 object-cover rounded-full' fill width={imageWidth} src={data.imageSrc} alt={data.imageAlt}/>
      </div>

      <div className='mt-4 flex flex-col justify-center items-center'>

        <p className='text-center w-fit'>{data.title}</p>

        <div  className='w-full max-w-40 h-1 bg-blue-gray-900 mt-5 rounded-3xl'/>

        <p className='mt-10 text-xs'>
          {data.description}
        </p>

      </div>

    </div>
  );
};
