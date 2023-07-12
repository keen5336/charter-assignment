import { useState, useEffect } from 'react'
import { getRewards } from '../../globals/http-requests'

const useDashboard = () => {
    const [yes, setYes] = useState('true')

    useEffect(() => {
        getRewards()
            .then(response => response.json())
            .then(res => {
                console.log(res)
            })
    }, [])

    return {
        yes
    }
}

export default useDashboard
