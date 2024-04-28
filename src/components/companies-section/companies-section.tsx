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
      <div className='relative w-full h-48 rounded-3xl md:rounded-full flex flex-col items-center justify-center p-5 md:p-10 border-4 border-secondary' >
        <p className='text-xl md:text-4xl font-bold text-center'>TECHNOLOGIES & HARDWARE</p>
        <p className='text-lg md:text-3xl mt-2'>USED BY HYDRA VR.</p>
        <div className='w-16 h-16 rounded-full absolute -bottom-8 bg-secondary'></div>
        <div className='w-14 h-14 rounded-full absolute -bottom-7 bg-primary'></div>
      </div>

      <div className='flex flex-wrap items-center justify-center mt-20 gap-5'>
        {companiesList.map(company => <div key={company.id}>{company.content}</div>)}
      </div>
    </div>
  );
}
