import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-manged-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Pizza Shop',
    description: 'custom-description',
    managerId: 'custom-manager-id',

    createdAt: new Date(),
    updatedAt: null,
  })
})
