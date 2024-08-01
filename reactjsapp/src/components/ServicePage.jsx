import React from 'react';

const services = [
  {
    title: 'Luxury Suites',
    description: 'Experience the ultimate in luxury and comfort with our spacious and elegantly designed suites.',
    imageUrl: 'https://images.pexels.com/photos/13359817/pexels-photo-13359817.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fine Dining',
    description: 'Indulge in gourmet meals prepared by world-class chefs in our exquisite dining venues.',
    imageUrl: 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Spa and Wellness',
    description: 'Relax and rejuvenate with our comprehensive spa and wellness services.',
    imageUrl: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Conference Rooms',
    description: 'Host your meetings and events in our state-of-the-art conference facilities.',
    imageUrl: 'https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Swimming Pool',
    description: 'Enjoy a refreshing swim in our well-maintained and inviting pools.',
    imageUrl: 'https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fitness Center',
    description: 'Stay fit and healthy with our fully equipped fitness center.',
    imageUrl: 'https://images.pexels.com/photos/4327006/pexels-photo-4327006.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-11/12 mx-auto my-10">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
