import { Statics } from '../Statics'
import { gql, request } from 'graphql-request'
import { useQuery } from 'react-query'
import React, { FC, useCallback, useEffect, useState } from 'react'
import * as styles from './index.module.scss'

const endpoint = 'https://app-api.phala.network/'

function useVCPU() {
  return useQuery('posts', async () => {
    const data = await request(
      endpoint,
      gql`
        query AggregateMiners {
          aggregateMiners(where: { state: { equals: "MiningIdle" } }) {
            _sum {
              pInstant
            }
          }
        }
      `
    )
    return data
  })
}

export const StaticsList: FC = () => {
  const [cpu, setCpu] = useState(0)
  const [workers, setWorkers] = useState(0)
  const { status: vCPUStatus, data: vCPUData } = useVCPU()

  const getData = useCallback(
    async function () {
      const response = await fetch(
        'https://app-analytics-data.netlify.app/latest/daily.json'
      )
      const data = await response.json()

      // setCpu(data.vCPU)
      setWorkers(data.workers)
    },
    [setCpu, setWorkers]
  )

  // date: "2021-09-29"
  // onlineWorkers: 5161
  // reward: 486178.03000000044
  // vCPU: 317702.1533333333
  // workers: 10555
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className={styles.StaticsList}>
      {workers > 0 && (
        <>
          <Statics name="Worker" value={workers}></Statics>
          {vCPUStatus === 'success' && (
            <Statics
              name="vCPU"
              value={Math.floor(
                vCPUData.aggregateMiners._sum.pInstant / 150
              )}></Statics>
          )}
          <Statics name="City" value={50} addPlus></Statics>
        </>
      )}
    </div>
  )
}
