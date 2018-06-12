export const createLocalCart = () => {
  console.log('[LOCALSTORAGE]: Cart created.')
  localStorage.setItem(
    'cart',
    JSON.stringify({
      id: 'guestUserCart',
      cartItems: []
    })
  )
}
