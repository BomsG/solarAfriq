const AdminHeader: React.FC = () => {
    return (
      <header className="flex justify-between items-center bg-green-900 text-white p-4">
        <h1 className="text-xl">Hello George!</h1>
        <div>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">Logout</button>
        </div>
      </header>
    );
  };
  
  export default AdminHeader;
  