<template>
  <table>
    <thead>
      <tr>
        <th>Lernpartner</th>
        <th>Material</th>
        <th>Von</th>
        <th>Bis</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in reservations" :key="reservation.ID" :data-id="reservation.ID">
      <td>{{ reservation.Fullname }}</td>
      <td>{{ reservation.Equipment }}</td>
      <td>{{ reservation.Start }}</td>
      <td>{{ reservation.End }}</td>
      <td><button @click="deleteReservation(reservation.ID)">delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ReservationList",
  data() {
    return {
      reservations: []
    }
  },
  created() {
    this.getReservations();

  },
  methods: {
    async getReservations() {
      const response = await fetch( this.apiUrl + "/reservationview" );
      this.reservations = await response.json();
      console.log(response);
    },
    async deleteReservation(resId) {
      const response = await fetch( this.apiUrl + '/equipment_reservation/'+resId,
        { method: "DELETE" }
      );
      const resultat = await response.json();
      if( response.status === 200 && resultat.result ) {
        alert("Eintrag gelöscht");
        this.getReservations();
      }
    }
  },
};
</script>

<style scoped lang="sass">
table
  border-collapse: collapse
  margin: 0 auto

  td
    text-align: left
    padding: 0.5em 2em

</style>
