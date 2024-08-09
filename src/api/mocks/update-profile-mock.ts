import { http, HttpResponse } from 'msw'

import { UpdateProfile } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfile>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
