const companiesList = [
  { id: 0,
    content: <div>Icon 1</div>
  },
  { id: 2,
    content: <div>Icon 2</div>
  },
  { id: 3,
    content: <div>Icon 2</div>
  },
  { id: 4,
    content: <div>Icon 2</div>
  },
  { id: 5,
    content: <div>Icon 2</div>
  },
];

export function CompaniesSection() {

  return (
    <div className='mt-20'>
      <div className='relative w-full h-48 rounded-full flex flex-col items-center justify-center bg-primary'>
        <p className='text-4xl font-bold'>TECHNOLOGIES & HARDWARE</p>
        <p className='text-4xl mt-2'>USED BY HYDRA VR.</p>
        <div className='w-20 h-20 rounded-full absolute -bottom-10 bg-secondary'></div>
        <div className='w-16 h-16 rounded-full absolute bg-opacity-60 -bottom-8 bg-primary'></div>
        <div className='w-12 h-12 rounded-full absolute bg-opacity-80 -bottom-6 bg-secondary'></div>
      </div>

      <div className='flex flex-wrap items-center justify-center mt-20 gap-5'>
        {companiesList.map(company => <div key={company.id}>{company.content}</div>)}
      </div>
    </div>
  );
}
