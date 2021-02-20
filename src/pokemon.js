import data from './pokemon.json'

data.forEach((obj, i) => { obj.id = i })

export default data