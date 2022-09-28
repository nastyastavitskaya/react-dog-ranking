import React, { useState, useEffect, useRef } from 'react';
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

export type Dog = {
  id?: number;
  [name: string]: any;
  img?: string;
  rating?: number[];
};

export interface IState {
  selected: {
    dog?: Dog;
    isAllSelected: boolean;
  };
  dogs: Dog[];
  years: number[];
};

function App() {
  const years: IState["years"] = [2013, 2015, 2017, 2019, 2021];
  const allDogs: IState["dogs"] = dogs;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<IState["selected"]>({ dog: { name: '' }, isAllSelected: true })

  const dropdownRef = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    const onBodyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (dropdownRef.current && dropdownRef.current.contains(target)) {
        return;
      }
      
      setIsDropdownOpen(false);
    }

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);

  const handleOptionClick = (value: any)  => {
    setSelected(value);
    setIsDropdownOpen(false);
  };

  return (
    <AppContainer>
      <Header
        selected={selected}
        allDogs={allDogs}
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        onDropdownClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onOptionClick={handleOptionClick}
      />
      <RootContainer
        years={years}
        selected={selected}
        allDogs={allDogs}
      />
      <Footer />  
    </AppContainer>
  );
}

export default App;
 