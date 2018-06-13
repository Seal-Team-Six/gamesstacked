export const createLocalCart = () => {
  localStorage.setItem(
    'cart',
    JSON.stringify({
      id: 'guestUserCart',
      cartItems: []
    })
  )
}
