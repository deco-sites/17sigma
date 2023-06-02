import { useState, useRef, useEffect } from "preact/hooks";
import { FaChevronRight, FaChevronDown, FaSearch} from "react-icons/fa";

import Container from "../components/Container.tsx";
import { Select } from "../components/Select.tsx";
import { PartnerProps } from "../components/Partner.tsx";

import Partner from "../components/Partner.tsx";
import dataParterns from "../data/paterns.ts"

import  { filteringTextValue } from '../helpers/index.ts'; 

export interface Props {
  partners: PartnerProps[];
}

type TypesFilter = 'country'|'category';

export default function FilterPartners(props:Props) 
{

  const filterArea = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLDivElement>(null);

  const [partners] = useState<Array<PartnerProps>>(
    Array.isArray(props.partners) ? props.partners : dataParterns,
  );

  const [filteredCountry,setFilteredCountry] = useState<string|undefined>();
  const [filteredCategory,setFilteredCategory] = useState<string|undefined>();
  const [partnersFiltered,setPartnersFiltered] = useState<PartnerProps[]>(partners);
  const [showFilter,setShowFilter] = useState<boolean>(false);
  const [showSearch,setShowSearch] = useState<boolean>(false);
  const handlerFilterPerTypes = (type:TypesFilter,search:string) => {
    
    let filtered: PartnerProps[]= [];
    
    switch (type) 
    {

      case 'category':
        setFilteredCategory(search);
        filtered = partnersFiltered.filter(({category}) => filteringTextValue(category,search));
        break;

      case 'country':
        setFilteredCountry(search);
        filtered = partnersFiltered.filter(({country}) => filteringTextValue(country,search))
        break;

      default:
        setPartnersFiltered(partnersFiltered)
        break;
    }

    setPartnersFiltered(filtered)
  }

  const handlerFilterAll = (type:TypesFilter) =>{

    let filtered: PartnerProps[]= [];

    if(type == 'category' && filteredCountry )
    {
      setFilteredCategory(undefined);
      filtered = partnersFiltered.filter(({country}) => filteringTextValue(country,filteredCountry))
    }
    else if(type == 'country' && filteredCategory)
    {
      setFilteredCountry(undefined);
      filtered = partnersFiltered.filter(({category}) => filteringTextValue(category,filteredCategory))
    }
    else
    {
      filtered = partners;
    }

    setPartnersFiltered(filtered)
  }

  const handlerFilterPerName = (search:string) => {
    let filtered: PartnerProps[]= [];
    filtered = partners.filter(({category,country,name}) => filteringTextValue(category+country+name,search))
    setPartnersFiltered(filtered);
  }

  const handlerToggleFilter= () => {
    setShowFilter(!showFilter)
  }

  const handlerOpenSearch = () => {
    setShowSearch(true)
  } 
  
  const onCloseSearchOutside = (evt:MouseEvent ) => {

    if(showSearch)
    {
      if (search.current && !search.current.contains(evt.target as HTMLDivElement)) {
        setShowFilter(false);
      }
    }
  }

  const onCloseFilterOutside = (evt:MouseEvent ) => {

    if(showFilter)
    {
      if (filterArea.current && !filterArea.current.contains(evt.target as HTMLDivElement)) {
        setShowFilter(false);
      }
    }
  }

  useEffect( ()=> {
    
 
    document.addEventListener("click",onCloseSearchOutside);
    document.addEventListener("click",onCloseFilterOutside);
    
    return(()=> {
      document.removeEventListener("click",onCloseFilterOutside);
      document.removeEventListener("click",onCloseSearchOutside);
    } )

  },[showFilter,search])

  return (
    <div className="relative text-landing-primary">
      <div id="filterArea" ref={filterArea} className='pt-12 pb-12 w-screen absolute top-0 left-0' style={ {backgroundColor:`${showFilter ? 'rgba(43, 42, 48, 0.9)':'transparent' }`}}>
        <Container>
          <div className='flex justify-between w-full flex-wrap'>
            <div className='flex gap-8 justify-center items-center w-full md:max-w-fit'>
                <Select 
                  active={showFilter} 
                  onClick={handlerToggleFilter}
                >
                  Category { showFilter ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/> }
                </Select>
                <Select 
                  active={showFilter} 
                  onClick={handlerToggleFilter}
                >
                  HQ { showFilter ? <FaChevronDown size={12}/> :  <FaChevronRight size={12}/> }
                </Select>
            </div>
            <div ref={search} onClick={handlerOpenSearch}  className={ ( showSearch ? 'pr-[1.875rem] pl-[1.875rem] justify-between' : 'p-0 justify-center'  ) + ' cursor-pointer flex items-center w-[3.5625rem] max-w-full min-w-fit border-[1px] h-[3.5625rem] rounded-full '}>
              { showSearch &&
                <input className= 'appearance-none'
                  type="text" 
                  name="searchPartners" id="search" 
                  onKeyUp={ ( {currentTarget} )=> handlerFilterPerName(currentTarget.value) }
                />
              }
              <FaSearch size={14}/>
            </div>
          </div>
          <div className={ (showFilter ? 'block': 'hidden') } >
            <button onClick={() => handlerFilterAll('category')}>All</button>
            {
              partners.map(item =>(
                <button onClick={() => handlerFilterPerTypes('category',item.category)}>{item.category}</button>
              ))
            }
          </div>
          <div className={ (showFilter ? 'block': 'hidden')} >
            <button onClick={() => handlerFilterAll('country')}>All</button>
            {
              partners.map(item =>(
                <button onClick={() => handlerFilterPerTypes('country',item.country)}>{item.category}</button>
              ))
            }
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 min-h-[650px] pt-24">
          {partnersFiltered.map((partner) => partner && <Partner {...partner} />)}
        </div>
      </Container>
    </div>
  )
}
