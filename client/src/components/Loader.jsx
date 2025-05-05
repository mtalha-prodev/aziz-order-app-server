import React from 'react'
import { ClipLoader } from 'react-spinners'

function Spinner({loading}) {
    return (
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-transparent z-50 " >
            <ClipLoader
                color={'red'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner
