import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import RootContainer from './components/containers/RootContainer';
import Footer from './components/Footer';

import dogs from './data/dogs';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 520px;
  min-height: 100vh;
`;

function App() {
  const years = [2013, 2015, 2017, 2019, 2021];
  const allDogs = dogs;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState('');

  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (dropdownRef.current.contains(e.target)) {
        return;
      }
      setIsDropdownOpen(false);
    }

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);

  const handleOptionClick = value  => {
    setSelectedDog(value);
    setIsDropdownOpen(false);
  };

  return (
    <AppContainer>
      <Header
        selectedDog={selectedDog}
        allDogs={allDogs}
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        onDropdownClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onOptionClick={handleOptionClick}
      />
      <RootContainer
        years={years}
        selectedDog={selectedDog}
        allDogs={allDogs}
      />
      <Footer />  
    </AppContainer>
  );
}

export default App;
