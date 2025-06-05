"use client"

import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if(e.target.value){
      params.set("q", e.target.value);
    }else{
      params.delete("q")
    }
    replace(`${pathName}?${params.toString()}`)
  };
  // console.log(searchParams);
  // console.log(pathName);

  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type='text' placeholder={placeholder} className={styles.input}  defaultValue={searchParams.get("q") || ""} onChange={handleSearch} />
    </div>
  )
}

export default Search
