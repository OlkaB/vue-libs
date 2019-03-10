<template>
    <div class="moment">
        <h3>Moment</h3>
        <h4>Date & time general</h4>
        <p>default (current): {{ this.$Luxon.DateTime.local() }}</p>
        <p>full date from (2017, 5, 15, 8, 30): {{ this.$Luxon.DateTime.local(2017, 5, 15, 8, 30) }}</p>
        <p>only date from numbers (2019, 2, 1): {{ this.$Luxon.DateTime.local(2019, 2, 1).toLocaleString() }}</p>
        <p>only date from string '2017-01-02': {{ this.$Luxon.DateTime.fromISO('2017-01-02').toLocaleString() }}</p>
        <hr>
        <h4>Formatting</h4>  
        <p>toISO: {{ this.$Luxon.DateTime.local().toISO() }}</p>
        <p>toISODate: {{ this.$Luxon.DateTime.local().toISODate() }}</p>
        <p>toISOTime: {{ this.$Luxon.DateTime.local().toISOTime() }}</p>
        <p>toHTTP: {{ this.$Luxon.DateTime.local().toHTTP() }}</p>
        <hr>      
        <h4>Math</h4>
        <p>current date PLUS {days: 3, months: 2}: {{ (this.$Luxon.DateTime.local().plus({days: 3, months: 2})).toLocaleString() }}</p>
        <p>current date MINUS {days: 3, months: 2}: {{ (this.$Luxon.DateTime.local().minus({days: 3, months: 2})).toLocaleString() }}</p>
        <p>current date MINUS {days: 3, months: 2}: {{ (this.$Luxon.DateTime.local().minus({days: 3, months: 2})).toLocaleString() }}</p>
        <p>date diff: {{dateDiff }}</p>
        <hr>
        <h4>Locale</h4>  
        <p>PL: {{ this.$Luxon.DateTime.local(2019, 2, 1).setLocale('pl').toLocaleString(this.$Luxon.DateTime.DATETIME_FULL) }}</p>
        <p>FR: {{ this.$Luxon.DateTime.local(2019, 2, 1).setLocale('fr').toLocaleString(this.$Luxon.DateTime.DATETIME_FULL) }}</p>
    </div>
</template>

<script>

export default {
    computed: {
        dateDiff() {
            var end = this.$Luxon.DateTime.fromISO('2017-03-13');
            var start = this.$Luxon.DateTime.fromISO('2016-02-13');

            var diffInYears = (end.diff(start, 'years')).toObject();
            var diffInMonths = (end.diff(start, 'months')).toObject();
            return JSON.stringify(diffInYears) + JSON.stringify(diffInMonths) + ' etc.';
        }
    }
}
</script>
