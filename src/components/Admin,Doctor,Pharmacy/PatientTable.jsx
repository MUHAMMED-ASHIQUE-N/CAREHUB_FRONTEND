import React from 'react';

const PatientTable = () => {
  const patients = [
    { id: 1, name: 'Richard James', payment: 'Cash', age: 20, dateTime: '24th July, 2023, 10 AM', fee: '$50', status: 'Open' },
    { id: 2, name: 'Richard James', payment: 'Cash', age: 20, dateTime: '24th July, 2023, 10 AM', fee: '$50', status: 'Open' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Patient</th>
            <th className="py-2 px-4">Payment</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Date & Time</th>
            <th className="py-2 px-4">Fee</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t">
              <td className="py-2 px-4">{patient.id}</td>
              <td className="py-2 px-4 flex items-center">
                <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                {patient.name}
              </td>
              <td className="py-2 px-4"><span className="border px-2 py-1 rounded-full">{patient.payment}</span></td>
              <td className="py-2 px-4">{patient.age}</td>
              <td className="py-2 px-4">{patient.dateTime}</td>
              <td className="py-2 px-4">{patient.fee}</td>
              <td className="py-2 px-4">
                <button variant="outline" className="font-roboto bg-green-100 text-green-700 rounded-full px-2 py-.5">
                  {patient.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
