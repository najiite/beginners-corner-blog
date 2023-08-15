const Pagination = ({posts, poststotal, loadMore}) => {
  return (
    <>
        <div className='flex justify-center'>
            { poststotal === posts?.length? (
              <></>
            ):(
            <button onClick={()=> loadMore()} className='btn'>See More</button>
            )}
          </div>
    </>
  )
}

export default Pagination