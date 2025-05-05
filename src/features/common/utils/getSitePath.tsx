export const getSitePath = (() => {
  return {
    home: '/',
    postAll: '/post',
    postDetail: (id: string) => `/post/${id}`,
    about: '/about',
    contact: '/contact'
  }
})()
