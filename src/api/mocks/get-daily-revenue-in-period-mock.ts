import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 1500 },
    { date: '03/01/2024', receipt: 1489 },
    { date: '04/01/2024', receipt: 1220 },
    { date: '05/01/2024', receipt: 2500 },
  ])
})
