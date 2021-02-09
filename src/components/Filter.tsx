import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Select from 'react-select'


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

const orderingOptions = [
    { value: 0, label: 'Ascending Course Level' },
    { value: 1, label: 'Decending Course Level' },
    { value: 2, label: 'Alphabetical' },
    { value: 3, label: 'Lowest Number of Prereqs' }
]

const filterOptions = [
    { value: 0, label: 'All Level' },
    { value: 1, label: '100 Level' },
    { value: 2, label: '200 Level' },
    { value: 3, label: '300 Level' },
    { value: 4, label: '400 Level' },
]

type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };

type FilterProps = {
    courses: Array<courseType>
    updateCourseData: (courseDataInput: Array<courseType>) => void;
}

const Filter = ({
    updateCourseData,
    courses}: FilterProps) => {

    const [order, setOrder] = useState<number>(0);
    const [filterType, setFilterType] = useState<number>(0);

    useEffect(() => {
        let newCourseData;
        switch (order) {
            
            case 0:
                newCourseData = [...courses.sort( (a,b) => {return a.number - b.number})]
                updateCourseData(filterData(newCourseData))
                break;
            case 1:
                newCourseData = [...courses.sort( (a,b) => {return b.number - a.number})]
                updateCourseData(filterData(newCourseData))
                break;
            case 2:
                newCourseData = [...courses.sort( (a,b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }

                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }

                    return 0;
                })]
                updateCourseData(filterData(newCourseData))
                break;

            case 3:
                newCourseData = [...courses.sort( (a,b) => {
                    if (a.prereqs) {
                        if (b.prereqs) {
                            if (b.prereqs.length > a.prereqs.length) {
                                return -1;
                            } else if (b.prereqs.length < a.prereqs.length) {
                                return 1;
                            }
                            return 0;
                        } else {
                            return 1;
                        }
                    } else {
                        if (b.prereqs) {
                            return -1;
                        } else {
                            return 0
                        }
                    }
                })]
                updateCourseData(filterData(newCourseData))
                break;
        } 
    }, [order, filterType])

   const filterData = (orderedData: Array<courseType>): Array<courseType> => {
        let newCourseData2;
        switch (filterType) {
            
            case 0:
                return orderedData
                break;
            case 1:
                console.log("HIT")
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 1 )]
                return newCourseData2
                break;
            case 2:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 2 )]
                return newCourseData2
                break;
            case 3:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 3 )]
                return newCourseData2
                break;
            case 4:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 4 )]
                return newCourseData2
                break;
        } 

        return orderedData
    }
    
    return (
        
        <FilterContainer>
            <FilterSubTitle>Ordering</FilterSubTitle>
            <Select value={orderingOptions[order]} options={orderingOptions} onChange={ (value) => setOrder(value ? value.value : 0)}/>
            <Line></Line>
            <FilterSubTitle>Course Level Filter</FilterSubTitle>
            <Select value={filterOptions[filterType]}  options={filterOptions} onChange={ (value) => setFilterType(value ? value.value : 0)}/>
            <Line></Line>
            <FilterSubTitle>Infomation</FilterSubTitle>
            <InfoText>Welcome to Penn Course Cart! Click on a course cart to view more info and add up to 7 courses by using the Add Icon. 
                You can also filter and sort the courses! Search for a course using the search bar.</InfoText>
        </FilterContainer>
    );
    
};

export default Filter;
