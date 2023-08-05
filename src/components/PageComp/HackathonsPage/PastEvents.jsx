import { hackathonDataList } from '@/content/Hackathons';

import DetailCard from '@/components/Cards/DetailCard';

const PastEvents = () => {
  return (
    <section id='past'>
      <div className='layout py-20'>
        <h1 className='h1'> Past events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {hackathonDataList.filter(
            (hack) => new Date().getTime() > new Date(hack.date).getTime()
          ).length > 0 ? (
            hackathonDataList
              .filter(
                (web) => new Date().getTime() > new Date(web.date).getTime()
              )
              .map((hack) => {
                return <DetailCard {...hack} key={hack.image} />;
              })
          ) : (
            <p>There no past hackathons right now</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
