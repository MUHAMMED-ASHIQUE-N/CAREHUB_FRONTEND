import React, { useState } from 'react'

//assets
import search_icon from '../../assets/assets_frontend/search_icon.svg'
import down1 from '../../assets/assets_frontend/dropdown_icon.svg'
import {DoctorsData} from '../../Constants/DoctorsData'
import Navbar from '../../components/Common/Navbar';
import DoctorCard from '../../components/Common/DoctorCard';
import Banner from '../../components/Common/Banner';
import Footer from '../../components/Common/Footer';




const Doctors = () => {

    

const [searchQuery, setSearchQuery] = useState('')
const [filteredDoctors, setFilteredDoctors] = useState(DoctorsData)
const [selectedSpecialty, setSelectedSpecialty] = useState('all')
const [showSpecialtyFilter, setShowSpecialtyFilter] = useState(false)


const specialties = ['all', ...new Set(DoctorsData.map(doctor => doctor.speciality))]


const applyFilters = (search, specialty) => {
  let filtered = DoctorsData

  // Apply specialty filter
  if (specialty !== 'all') {
    filtered = filtered.filter(doctor => 
      doctor.speciality.toLowerCase() === specialty.toLowerCase()
    )
  }

  if (search) {
    const lowerCaseSearch = search.toLowerCase()
    filtered = filtered.filter(doctor => 
      doctor.name.toLowerCase().includes(lowerCaseSearch) ||
      doctor.speciality.toLowerCase().includes(lowerCaseSearch)
    )
  }

  setFilteredDoctors(filtered)
}


const handleSpecialtyFilter = (specialty) => {
  setSelectedSpecialty(specialty)
  setShowSpecialtyFilter(false)
  applyFilters(searchQuery, specialty)
}

const handleSearch = (query) => {
  setSearchQuery(query)
  const lowerCaseQuery = query.toLowerCase().trim()

  if(!lowerCaseQuery){
    setFilteredDoctors(DoctorsData)
    return
  }


  const filtered = DoctorsData.filter(doc => {
    const searchString = `${doc.name.toLocaleLowerCase()} ${doc.speciality.toLocaleLowerCase()}`
    return searchString.includes(lowerCaseQuery)
  })

  setFilteredDoctors(filtered)
}
  
  return (
    <div >
     
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto  lg:w-[85%]'>
        <div className='flex justify-center gap-4 items-center py-20 w-full mt-[4.5rem]'>
        <div className='w-1/2 flex-shrink-0  relative'>
             <input type="text" placeholder='Search' 
             value={searchQuery} onChange={ (e)=> handleSearch(e.target.value) }
             className='border w-full border-black px-4 py-2  rounded-full relative' />
             <img src={search_icon} alt=""  className='absolute w-5 h-5 right-5 top-3 '/>
            </div>
        
            <div className='relative w-full md:w-auto'>
            <button 
              className='flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full w-full md:w-48 justify-between'
              onClick={() => setShowSpecialtyFilter(!showSpecialtyFilter)}
            >
              <span>{selectedSpecialty === 'all' ? 'All Specialties' : selectedSpecialty}</span>
              <img src={down1} alt="Dropdown" className='w-4 h-4'/>
            </button>
            
            {showSpecialtyFilter && (
              <div className='absolute right-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto'>
                {specialties.map((specialty, index) => (
                  <button
                    key={index}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      specialty === selectedSpecialty ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => handleSpecialtyFilter(specialty)}
                  >
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Filter Display */}
        {selectedSpecialty !== 'all' && (
          <div className="text-center mb-6">
            <span className="bg-primaryColor text-white px-4 py-1 rounded-full text-sm">
              Showing: {selectedSpecialty}
              <button 
                onClick={() => handleSpecialtyFilter('all')}
                className="ml-2 text-white hover:text-gray-200"
              >
                ×
              </button>
            </span>
          </div>
        )}

        {/* //doctors */}
        <div className="mx-auto lg:w-[85%] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-5
        
         py-10">
        {filteredDoctors.map((val) => (
          <div key={`${val._id}-${filteredDoctors.length}`}>
            <DoctorCard
            id={val._id}
              image={val.image}
              name={val.name}
              speciality={val.speciality}
            />
          </div>
        ))}
      </div>

      {/* //banner  */}
      <div>
        <Banner/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Doctors