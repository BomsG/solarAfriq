/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import dayjs from 'dayjs';
// import { DataTable } from '../table/data-table';
// import { allCampaignColumns } from '../table/tableColumns';
// import { removeHTMLTags } from '@/lib/utils/removeHTMLTags';
// import { Spinner } from '../ui';
// import { mockCampaignData } from '../../components/mock/campaign';

export default function Orders() {
  //   const campaignData = data?.map((camp: any) => ({
  //     id: camp._id,
  //     // status: camp.Status,
  //     title: camp.CampaignName?.slice(0, 18) + '...',
  //     description: removeHTMLTags(camp.CampaignDescription).slice(0, 18) + '...',
  //     startDate: dayjs(camp.CampaignStartDate).format('DD, MMM YYYY'),
  //     endDate: dayjs(camp.CampaignEndDate).format('DD, MMM YYYY'),
  //     infl: camp.MinimumNumOfInfluencers,
  //     // followers: camp.MinimumNumOfFollowers,
  //   }));

  return (
    <div>
      <div className='w-full flex flex-col sm:flex-row flex-wrap gap-3'>
        {/* {campaignData?.map((campaign: any) => (
          <CampaignBox key={campaign.id} campaign={campaign} />
        ))} */}
        {/* {campaignData ? (
          <DataTable columns={allCampaignColumns} data={campaignData} />
        ) : (
          <div className='absolute top-[40%] left-[50%] h-screen '>
            <Spinner size='10' color='pink' />
          </div>
        )} */}
        Movies
      </div>
    </div>
  );
}
