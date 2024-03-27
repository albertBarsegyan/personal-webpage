import { Card } from '@/components/common/card/card';

const BestPoints = [
  {
    id: 0,
    title: 'SIMULATION',
    description: 'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing'
  },
  {
    id: 1,
    title: 'TESTING 2',
    description: 'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing'
  },
  {
    id: 2,
    title: 'TESTING 3',
    description: 'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing'
  },
  {
    id: 3,
    title: 'TESTING 4',
    description: 'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing'
  }
];

export function ReasonSection() {
  return (
    <div className='mt-6'>
      <div className='flex md:flex-row flex-col justify-between'>
        <h3 className='font-bold text-2xl'>Why work with Yacko</h3>
        <p className='max-w-3xl mt-4 md:mt-0'>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className='flex flex-row items-center mt-20 gap-x-5 justify-center'>
        {BestPoints.map(({ id, ...data }) => <Card  key={id} data={data}/>)}
      </div>
    </div>
  );
}
