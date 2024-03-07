import { Fragment } from 'react';

const Companies = [
  { id:0,
    content:'First company'
  },
  { id:1,
    content:'Second Company'
  },
  { id:2,
    content:'Third company'
  }
];

export function CompaniesSection() {
  return (
    <div>
      <div className='rounded-full w-full bg-blue-gray-900 py-20 flex flex-col justify-center items-center'>
        <span>TECHNOLOGIES & HARDWARE</span>
        <p>USED BY HYDRA VR.</p>
        <div></div>
      </div>

      <div>
        {Companies.map(company => <Fragment key={company.id}>{company.content}</Fragment>)}
      </div>
    </div>
  );
};
