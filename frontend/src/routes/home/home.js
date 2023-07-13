import { useState, useEffect } from 'react'
import { getRewards } from '../../globals/http-requests'

const useHome = () => {
    const [dataset, setDataset] = useState(() => [])
    useEffect(() => {
        getRewards()
            .then(response => response.json())
            .then(res => {
                if (res.response === 'success'){
                    setDataset(res.data)
                }
            })
    }, [])

    return {
        dataset
    }
}

export default useHome
