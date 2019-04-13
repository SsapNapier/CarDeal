const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
  car('ford', 'focus', 'Max', 2016, '+7 929 123 45 67', 'cars/1.jpeg'),
  car('ford', 'mondeo', 'Jerry', 1939, '+7 333 123 45 67', 'cars/2.jpeg'),
  car('Mustang', 'Charger', 'Max', 1945, '+7 929 666 45 67', 'cars/3.jpeg')
]


new Vue({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],
    logs: [],
    selectedCarIndex : 0,
    selectedPhoneIntel : 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
  },
  methods: {
    selectCar(index) {
      this.car = cars[index]
      this.selectedCarIndex = index
    },
  newOrder() {
    this.modalVisibility = false
    this.logs.push(
      log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'),
    )
  },
  cancelOrder() {
    this.modalVisibility = false
    this.logs.push(
      log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'),
    )
  }
  },
  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    }
  },
    filters: {
      date(value) {
        return value.toLocaleString()
      }
    }
})
