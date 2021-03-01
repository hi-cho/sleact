import React from 'react'
import Workspace from '@layouts/Workspace'
import useSWR from 'swr'
import fetcher from '@utils/fetcher'

const Channel = () => {
    const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher)
    console.log(data)

    if (!data) {
        return <div>로딩중...</div>
    }
    return (
        <Workspace>
            <div>{data.nickname}님 안녕하세요</div>
        </Workspace>
    )
}

export default Channel
