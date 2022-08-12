import React from 'react'
import { useSearchUsersQuery } from '../store/github/githubApi'

export const HomePage = () => {
	const {isLoading,isError,data} = useSearchUsersQuery('anton')
  return (
	 <div>homepage</div>
  )
}
