import React from 'react';
// import AdminSidebar from '../../components/AdminSideBar';
// import AdminHeader from '../../components/AdminHeader';

const AdminDashboard: React.FC = () => {
  return (
    <div className='flex'>
      {/* <AdminSidebar /> */}
      <div className='flex-grow ml-64'>
        {/* <AdminHeader /> */}
        <div className='p-8'>
          <h2 className='text-2xl mb-5'>Welcome to the Admin Dashboard</h2>
          <p>Overview and analytics will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
