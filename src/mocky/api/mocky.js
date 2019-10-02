import {instance} from '@/api';


export const generateMock = {
  p: ['post,/mocky/v2'],
  r: params => {
    return instance.post(`/mocky/v2`, params)
  }
}

