// export function helloWorld(firstName, lastName) {
//     return {
//       type: 'HELLO_WORLD',
//       payload: {
//         firstName: firstName,
//         lastName: lastName
//       }
//     }
//   }

export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}
//   export function helloWorld(firstName, lastName) {
//     return {
//       type: 'NEW_HELLO_WORLD',
//       payload: {
//         firstName: firstName,
//         lastName: lastName
//       }
//     }
//   }