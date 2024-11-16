import {PERSONAL_INFO} from "../../../data";

const Location = () => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex items-center justify-between'>
        <span className='text-Snow text-xs font-bold'>Country</span>
        <span className='text-xs text-gray-600'>{PERSONAL_INFO.country}</span>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-Snow text-xs font-bold'>Age</span>
        <span className='text-xs text-gray-600'>{PERSONAL_INFO.age}</span>
      </div>
    </div>
  );
};

export default Location;
