
import { useState, useEffect} from "react"
import {AiFillCloseCircle} from "react-icons/ai"
import  {BsSearch} from "react-icons/bs"
import {client} from '@/backend/SanityClient';
import PostLists from "@/components/Blog/PostLists";

const Search = () => {
    const [searchmodal, setSearchmodal] = useState(false)
    const [searchterm, setSearchterm] = useState('')
    const [loading, setLoading] = useState(true)
    const [searchresults, setSearchresults] = useState(null)
    useEffect(() => {
        client.fetch(
            `*[_type == "post"][body[].children[].text match "${searchterm}*" || title match "${searchterm}"]{
            _id,
            title,
            slug,
            }`
                )
                .then((data) => {setSearchresults(data); setLoading(false)})
                .catch(console.error)
            
    }, [searchterm])
    if (searchresults === null)
    return(
      <></>
    )
    return (
        <>
            <div>
                    <div>
                        <button onClick={()=> setSearchmodal(!searchmodal)} >
                            <BsSearch size={25} />
                        </button>

                    </div>
                    <div className={`fixed bg-white top-0 lg:px-20 lg:py-20 p-5 left-0 w-full h-screen overflow-y-scroll z-20 ease-in duration-300 ${ searchmodal ? '': 'hidden'}`}>
                        <div className="flex justify-between">
                            <form>
                                <div className="input-group relative  flex flex-wrap items-stretch w-full mb-4 rounded">
                                    <input type="search" value={searchterm} onChange={(e) => {setSearchterm(e.target.value)}} className="relative flex-auto block px-3 outline-none py-1.5 bg-clip-padding border-0 border-b-2 border-b-black" placeholder="Search" />
                                </div>
                            </form>
                            <div>
                                <button onClick={()=> setSearchmodal(false)}>
                                    <AiFillCloseCircle size={25} />
                                </button>
                            </div>

                        </div>

                        <div>
                            { searchterm.length > 2 ? (<h4>Search results for "{searchterm}"</h4>):(<></>) }

                            { searchresults.length === 0 && searchterm.length > 1 ? (<p>No results for "{searchterm}"</p>): (<></>) }
                            
                            <PostLists posts={searchresults} />
                        </div>

                    </div>
            </div>
        </>
  )
}

export default Search