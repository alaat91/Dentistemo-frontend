<template>
    <div>
    <the-navigation></the-navigation>
    <h2 class="upcoming-appointments">Upcoming appointments:</h2>

    <p>{{ test }}</p>
    <p>
        <ul>
          <li v-for="appointment in upcamingAppointments" :key="appointment._id" >{{ new Date(appointment.date).toDateString() }}</li>
            <!---<li v-if="new Date(appo.date).toDateString() < nowDate">{{ new Date(appo.date).toDateString()  }} </li>-->
        </ul>
    </p>
    <h2 class="past-appointments">appointment history:</h2>
    <p>
        <ul>
            <li v-for="appointment in pastAppointments" :key="appointment._id" >{{ new Date(appointment.date).toDateString() }}</li>   
        </ul>
    </p>

</div>
</template>

<script>
import { API } from '../config/api'
import TheNavigation from '../components/TheNavigation.vue'
export default{
  components: { TheNavigation },
    data() {
        return {
          appointments: [],
          nowDate: '',
          test: '',
          

        }
    },
  created: async function () {
    this.nowDate = new Date()
    
    try {
        const res = await API.get('/bookings')
        
        this.appointments = res.data

        console.log(res.data);
    } catch(err) {
        console.error(err)
    }
  },
  methods: {
    hello(){
      console.log(this.appointments);
      console.log(this.filteredDate);
      console.log(this.test.date);
    }

  },
  computed: {
    upcamingAppointments() {
      return this.appointments.filter((appointment) => appointment.date > Date.now())
      
    },
    pastAppointments() {
      return this.appointments.filter((appointment) => appointment.date < Date.now())
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

/* Set the background color for the header and footer */
header, footer {
  background-color: #333;
  color: white;
  padding: 20px;
}

/* Set the style for the appointments section */
.appointments {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
}

/* Set the style for the upcoming appointments section */
.upcoming-appointments {
  width: 45%;
}

/* Set the style for the past appointments section */
.past-appointments {
  width: 45%;
}

/* Set the style for the individual appointments */
.appointment {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
}

/* Set the style for the date of the appointment */
.appointment .date {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Set the style for the description of the appointment */
.appointment .description {
  font-size: 14px;
  margin-bottom: 5px;
}

/* Set the style for the location of the appointment */
.appointment .location {
  font-size: 12px;
  font-style: italic;
}

/* Set the style for the "Upcoming Appointments" heading */
.upcoming-appointments h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

/* Set the style for the "Past Appointments" heading */
.past-appointments h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}
</style>