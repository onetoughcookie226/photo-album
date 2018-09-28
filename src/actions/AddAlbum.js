export const ADD_ALBUM = 'ADD_ALBUM'

export function addalbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id: id,
      title: title
    }
  }
}