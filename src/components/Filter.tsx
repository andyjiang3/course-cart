import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 30px;
`

const FilterSubTitle = styled.span`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
`

const Line = styled.hr`
    background-color: #dddddd;
    border: none;
    height: 2px;
    margin: 0;
    padding: 0;
    margin-top: 30px;

`

const InfoText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 8px;
`;
const animated = makeAnimated();

const orderingOptions = [
    { value: 'ascending', label: 'Ascending Course Level' },
    { value: 'decending', label: 'Decending Course Level' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'prereq', label: 'Number of Prereqs' }
]

const filterOptions = [
    { value: '100', label: '100 level' },
    { value: '200', label: '200 level' },
    { value: '300', label: '300 level' },
    { value: '400', label: '300 level' },
]

const Filter = () => {

    return (
        <FilterContainer>
            <FilterSubTitle>Ordering</FilterSubTitle>
            <Select defaultValue={orderingOptions[0]} options={orderingOptions}/>
            <Line></Line>
            <FilterSubTitle>Filter</FilterSubTitle>
            <Select closeMenuOnSelect={false} components={animated} options={filterOptions} isMulti/>
            <Line></Line>
            <FilterSubTitle>Infomation</FilterSubTitle>
            <InfoText>Welcome to Penn Course Cart! Click on a course cart to view more info and add up to 7 courses by using the Add Icon. 
                You can also filter and sort the courses! Search for a course using the search bar.</InfoText>
        </FilterContainer>
    );
    
};

export default Filter;
