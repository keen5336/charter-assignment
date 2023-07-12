const sendFetch = (url, body) =>
  fetch(url, { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

const getRewards = (props) => sendFetch('http://localhost:4200/rewards/get', props)

export { getRewards }
